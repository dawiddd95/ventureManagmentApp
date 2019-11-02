import uuid from 'uuid'
import models from '../../db/models'
import {forgotPassword} from '../emails/emails'
import {transporter} from '../emails/transporter'

const forgotPasswordService = async (email) => {
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

export default forgotPasswordService