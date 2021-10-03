const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('WebPage')
    }
    else if (req.url === '/about') {
        res.end('about page')
    }
    else {
        res.end(`<p>Oops</p>
          <p>We can't find the page requsted</P>
          <a href="/">back home</a>`)
    }
})

server.listen(5000)