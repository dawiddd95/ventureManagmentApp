import uuid from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import models from '../db/models'
import {verifyEmail, forgotPassword} from './emails/emails'
import {transporter} from './emails/transporter'


const SECRET = uuid.v4()

const generateToken = user => {
   return jwt.sign({userId: user.id}, SECRET)
}

export const createUser = async (name, surname, email, password) => {
   const key = uuid.v4()
   const active = false
   const code = uuid.v4()
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/verify?code=${code}&key=${key}`
   const emailSend = verifyEmail(email, link)
   const newPassword = await bcrypt.hash(password, 10)
   
   const user = await models.User.findOne({where: {email}})
   if(user) throw new Error('Email is already in usage')

   const userData = {name, surname, email, password: newPassword, key, active, code}

   transporter.sendMail(emailSend.mailOptions)
   return models.User.create(userData)
}


export const loginUser = async (email, password) => {
   const user = await models.User.findOne({where: {email}})
   if(!user) throw new Error('Wrong user')

   const valid = await bcrypt.compare(password, user.password)
   if(!valid) throw new Error('Wrong password')

   if(!user.active) throw new Error('Account is inactive, Wrong user or password')

   return { token: generateToken(user), user}
}


export const getUserIdMiddleware = async (req) => {
   try {
      const token = req.headers.authorization
      if (token) {
        const { userId } = await jwt.verify(token, SECRET)
        req.userId = userId
      }
   } catch(err) {
      req.userId = null
   }
  
   req.next()
} 


export const forgotPasswordUser = async (email) => {
   const key = uuid.v4()

   const user = await models.User.findOne({where: {email}})
   if(!user) throw new Error(`Sorry, we don't recognize your credentials`)

   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/reset?code=${user.code}&key=${key}`
   const emailSend = forgotPassword(email, link)

   transporter.sendMail(emailSend.mailOptions)
   models.User.update({key}, { where: { email }})

   // Jeśli nic nie zwrócę w return to zapytanie graphQL zwróci mi null
   return user
}