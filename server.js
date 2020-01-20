var http = require("http");
var url = require("url");
//TODO = fs를 리퀘스트 핸들러 또는 라우터로 이동 후 start에서 데이터만 받게 수정할 것
var fs = require("fs");

function start(route){
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        var pathname = url.parse(req.url).pathname;
        console.log(pathname + ' 으로부터의 요청 접수됨');
        route(pathname);
        
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