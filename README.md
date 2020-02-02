# Valid Email Hook

A custom React Hook to check if an email address is valid or not.

### Explanation

There is not really a way to make a complete email verification, since users can still use a fake email address to bypass this. That's why most systems will have a "email verification link" to check that an email actually exists.

The purpose of this custom hook is to check for basic errors or typos, to improve the user experience. Checks included:

- Invalid symbols in the beginning of the address (e.g.: `?john@domain.com`)
- Invalid symbols at the  end of the address (e.g.: `john@domain.com}`)
- Missing the `@` symbol (e.g.: `johndomain.com`)
- Missing the `.` indication for the domain (e.g.: `john@domaincom`)
- Two consecutive dots `..` (e.g.: `john@domain..com`)
- Comma instead of dot (e.g.: `john@domain,com`)
- Spaces in the middle of the address (e.g.: `joh n@domain,com`)

[Reference](https://stackoverflow.com/a/201447/6080254)

### Requirements

You need to use a version of `React` that supports the `hook` feature.

### Usage

Import `useValidEmail` and use it with an email adress as the only parameter. The return will be a `boolean` value.

**Basic Example:**

```javascript
const isEmailValid = useValidEmail("john@domain.com");

if (isEmailValid) {
  // Valid email, yay!
} else {
  // Something is wrong :(
}
```

**Advanced Example:**

```javascript
const [emailValue, setEmailValue] = useState("");
const isEmailValid = useValidEmail(emailValue);

const handleInputChange = (e) => {
  setEmailValue(e.target.value)
}

return (
  <div>
    <input onChange={handleInputChange} value={emailValue} />
    {!isEmailValid && <span className="error-message">Invalid email address!</span>}
  </div>
)
```
