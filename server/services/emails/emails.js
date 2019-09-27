const verifyEmail = (email, link) => {
   return {
      mailOptions: {
         to : email,
         subject : "Please confirm your Email account",
         html : `
            Hello,<br> 
            Follow this link to verify your email address.<br>
            <a href=${link}>${link}</a><br>
            If you didn’t ask to verify this address, you can ignore this email.<br>
            Thanks,<br>
            Your venture managment app team.
         `
      },
   }
}

const forgotPassword = (email, link) => {
   return {
      mailOptions: {
         to : email,
         subject : "Reset your password for venture managment app account",
         html : `
            Hello,<br> 
            Follow this link to reset password for your <strong>${email}</strong> account<br>
            <a href=${link}>${link}</a><br>
            If you didn’t ask to reset your password, you can ignore this email.<br>
            Thanks,<br>
            Your venture managment app team.
         `
      },
   }
}

module.exports = {verifyEmail, forgotPassword}