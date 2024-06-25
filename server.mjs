import { createServer } from 'node:http';
import {unlink, writeFile} from 'node:fs';
// Define request handler
// function requestHandler(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('We have an HTTP Server');
// }

// to create anonymous function
// const server = createServer(function requestHandler(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>We have an HTTP Server</h1>');
// });
const server = createServer((req, res) =>{
    console.log(req.url);
    if(req.url.includes('create')){
        // Create file
        writeFile('./abc.html', '<h1>Learning Node.js</h1>', (err) =>{
            console.log(err);
            // Return response
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>File deleted</h1>');
            });
    } else{
        // Delete file
        unlink('./index.html', (err) =>{
            // Return a response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>File deleted</h1>');
        });
        
    }
   
});

// Create HTTP SERVER
// const server = createServer(requestHandler);

// Listen for incoming request
server.listen(3000, '127.0.0.1',() =>{
    console.log('Server is running')
});

// Normal function vs Arrow Function
// function handleRequest(){}
const handleRequest = () =>{}




// import { createServer } from 'node:http';

// function requestHandler(req, res) {
//     if (req.url === '/success') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Request was successful');
//     } else if (req.url === '/created') {
//         res.writeHead(201, {'Content-Type': 'text/plain'});
//         res.end('Resource created');
//     } else if (req.url === '/bad-request') {
//         res.writeHead(400, {'Content-Type': 'text/plain'});
//         res.end('Bad Request');
//     } else if (req.url === '/unauthorized') {
//         res.writeHead(401, {'Content-Type': 'text/plain'});
//         res.end('Unauthorized');
//     } else if (req.url === '/not-found') {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Not Found');
//     } else {
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end('Internal Server Error');
//     }
// }

// const server = createServer(requestHandler);

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });


