const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('error')
        return null;
    }
    else {
        const first = result;

        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                return;
            }
            else {
                const second = result;
                writeFile('./content/subfolder/asyncWrite.txt', `Here is the file ${first} and ${second}`, (err, result) => {
                    if (err) {
                        console.log('error')
                    }
                    else {
                        console.log(result)
                    }
                })
            }
        })

    }
})
