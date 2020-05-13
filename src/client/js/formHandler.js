const handleSubmit = (event) => {
    event.preventDefault()

    const formInput = document.getElementById('input-url').value

    const data = {
        url: formInput
    }

    fetch('http://localhost:8080/analyze', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then(result => result.json())
        .then(jsonResult => {
            document.getElementById('results').innerHTML =
                `<div>
            <span>- polarity: ${jsonResult.polarity} (${probabilityToPercentage(jsonResult.polarity_confidence)})</span><br>
            <span>- subjectivity: ${jsonResult.subjectivity} (${probabilityToPercentage(jsonResult.subjectivity_confidence)})</span>
        </div>`
            document.getElementById('result').style.display = 'block'
        })
}

const probabilityToPercentage = (probability) => {
    return `${(probability * 100).toFixed(2)}%`
}

export { handleSubmit, probabilityToPercentage }
