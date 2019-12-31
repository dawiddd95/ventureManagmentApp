import React from 'react';

export const useAuthForm = () => {
   const [isSubmit, setIsSubmit] = React.useState(false);
   
   const handleOnSubmit = () => {
      setIsSubmit(true)
   }

   const handleOnInput = () => {
      setIsSubmit(false)
   }

   return [isSubmit, handleOnSubmit, handleOnInput]
}