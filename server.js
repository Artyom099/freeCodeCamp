const http = require('http')        // подключаем готовый пакет http
let requestsCount = 0

const server = http.createServer( (request, response) => {
    requestsCount++

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break;
        case '/courses':
            response.write('FRONT + BACK')
            break;
        default:
            response.write('404 NOT FOUND')
    }

    response.write(' some data ' + requestsCount)
    response.end()

} )  // http создает сервер и возвращает его в переменную server

server.listen(3003)                 // слушай 3003-й порт
