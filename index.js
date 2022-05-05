const http = require('http');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.end(`IP: ${req.socket.remoteAddress}, czas: ${new Date()}`)
        }
    }
})

server.listen(port, () => {
    console.log(`Serwer nasluchuje na porcie ${port}, uruchomiony ${new Date()}`);
    console.log("Mikolaj Starczewski 2022")
})