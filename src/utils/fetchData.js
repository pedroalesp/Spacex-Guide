//let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) =>{ 
    return new Promise ((resolve, reject) => {
        const xhttp = new XMLHttpRequest() 
        xhttp.open('GET', url_api, true) 
        xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4) {
                    (xhttp.status === 200) //expresion ternaria
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
//Este codigo es funcionalmente igual al de abajo, pero usando promesas y es6.
//El de abajo usa estructura de callbacks
                   /* if (xhttp.status === 200) {
                        callback(null, JSON.parse(xhttp.responseText))
                    } else {
                        const error = new Error('ERROR' + url_api)
                        return callback(error, null)
                    }*/
                }
            }
        xhttp.send()
    })
}

//module.exports = fetchData