const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/writeFile.txt', `here is the created text file ${first} and ${second}`)
