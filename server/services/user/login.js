import uuid from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../../db/models'

const SECRET = uuid.v4()

const generateToken = user => {
   return jwt.sign({userId: user.id}, SECRET)
}

export const loginUser = async (email, password) => {
   const user = await models.User.findOne({where: {email}})
   if(!user) throw new Error('Wrong user')

   const valid = await bcrypt.compare(password, user.password)
   if(!valid) throw new Error('Wrong password')

   if(!user.active) throw new Error('Wrong user or password')

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
