import uuid from 'uuid'
import bcrypt from 'bcrypt'
import models from '../../db/models'
import {verifyEmail} from '../emails/emails'
import {transporter} from '../emails/transporter'

const createUser = async (name, surname, email, password) => {
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

export default createUser