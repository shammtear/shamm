async function sendForm() {
    const inputs = document.getElementsByTagName('input')
    const username = inputs[0].value
    const password = inputs[1].value

    await fetch('/api/v2/login', {
        method: "post",
        body: JSON.stringify({
            username, password
        }),
        headers: {
            'Content-Type': "application/json;charset=UTF-8"
        }
    }).then(res => res.json()).catch(console.error)

}