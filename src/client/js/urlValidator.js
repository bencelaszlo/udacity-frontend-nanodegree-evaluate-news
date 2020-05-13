const validateUrl = (url) => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const urlRegexp = new RegExp(expression)
    return !!url.match(urlRegexp)
}

const validateInput = (event) => {
    event.preventDefault()

    const formInput = document.getElementById('input-url').value
    const spanInputError = document.getElementById('invalid-input-value')
    const submitButton = document.getElementById('submit-button')

    if (formInput.length) {
        if (validateUrl(formInput)) {
            spanInputError.innerText = ''
            submitButton.style.display = 'inline';
        } else {
            spanInputError.innerText = 'The given URL is not valid'
            submitButton.style.display = 'none';
        }
    } else {
        spanInputError.innerText = 'The value is empty'
        submitButton.style.display = 'none'
    }
}

export { validateUrl, validateInput }
