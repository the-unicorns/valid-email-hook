import React from 'react'

export const useValidEmail = (email_value) => {
  const [isValid, setIsValid] = React.useState(false)

  React.useEffect(() => {
    if (RegExp(/^\w[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}\w$/).test(email_value)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }

  }, [email_value])

  return isValid
}