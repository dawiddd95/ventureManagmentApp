import * as Yup from 'yup'

//  dodac te walidacje jakos do createUser
const createUserValidation = Yup.object().shape({
   name: Yup
      .string()
      .min(3)
      .required(),
   surname: Yup
      .string()
      .min(3)
      .required(),
   email: Yup
      .string()
      .email()
      .required(),
   password: Yup
      .string()
      .min(8)
      .matches(/^(?=.*[A-Z])/)
      .matches(/^(?=.*[0-9])/)
      .matches(/^(?=.*[!@#$%^&*()])/)
      .required(),
})

export default createUserValidation