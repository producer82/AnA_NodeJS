var http = require("http");
var fs = require("fs");

function start(){
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        fs.readFile('index.html', (err, data) => {
            if (err){
                return console.err(err);
            }
            else{
                res.write(data);
            }
        });
    }).listen(8888);

    console.log("서버 가동됨");
}

exports.start = start;