import uuid from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import models from '../db/models'
import {verifyEmail} from './emails/emails'
import {transporter} from './emails/transporter'


const SECRET = uuid.v4()

const generateToken = user => {
   return jwt.sign({userId: user.id}, SECRET)
}

// SPROBOWAC URUCHOMIC SAM SERWER, WPISAC MUTACJE TWORZENIA USERA I CZY WYSLE EMAIL DODDA DO DB I ZAHASHUJE HASLO
export const createUser = async (name, surname, email, password, key, active, code) => {
   const newKey = uuid.v4()
   const newCode = uuid.v4()
   const host = 'http://localhost:5000' ? 'http://localhost:3000' : req.get('host')
   const link = `${host}/auth/verify?code=${code}&key=${key}`
   const emailSend = verifyEmail(email, link)
   const newPassword = await bcrypt.hash(password, 10)
   
   // Napisać warunek czy email istnieje jeśli tak to {throw new Error('Email already exist')} czy cos tam

   transporter.sendMail(emailSend.mailOptions)

   return models.User.create({name, surname, email, password: newPassword, key: newKey, active, code: newCode})
}

export const loginUser = async (email, password) => {
   const user = await models.User.findOne({where: {email}})
   if(!user) throw new Error('User not found')
   
   const valid = await bcrypt.compare(password, user.password)
   if(!valid) throw new Error('Wrong password')

   return {
      token: generateToken(user), 
      user
   }
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