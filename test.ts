import * as http from 'http';
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('---method---');
  console.log(request.method);

  console.log('---url---');
  console.log(request.url);

  console.log('---headers---');
  console.log(request.headers);

  let array = [];
  request.on('data', (chunk) => {
    array.push(chunk);
  });
  request.on('end', () => {
    const body = Buffer.concat(array).toString();
    console.log('---body---');
    console.log(body);
  });


  response.statusCode = 404;
  response.setHeader('adekang', 'I am adekang');

  response.write('1\n');
  response.write('2\n');
  response.end();
});

server.listen(8888);


