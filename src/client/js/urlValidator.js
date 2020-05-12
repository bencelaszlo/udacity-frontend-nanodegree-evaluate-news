const validateUrl = (url) => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const urlRegexp = new RegExp(expression)
    return !!url.match(urlRegexp)
}

export { validateUrl }
