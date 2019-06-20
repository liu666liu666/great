const zlib = require('zlib');
const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    const raw = fs.createReadStream('index.html');
    let acceptEncoding = request.headers['accept-encoding'];
    if (!acceptEncoding) {
        acceptEncoding = '';
    }

    if (/\bdeflate\b/.test(acceptEncoding)) {
        response.writeHead(200, { 'Content-Encoding': 'deflate' });
	 //文件压缩
        raw.pipe(zlib.createDeflate()).pipe(response);
    } else if (/\bgzip\b/.test(acceptEncoding)) {
        response.writeHead(200, { 'Content-Encoding': 'gzip' });
	  //文件压缩
        raw.pipe(zlib.createGzip()).pipe(response);
    } else {
        response.writeHead(200, {});
        raw.pipe(response);
    }
}).listen(1337);
