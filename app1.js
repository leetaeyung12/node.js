const express = require('express')
const http = require('http');
const app = express();

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다 : ' + app.get('port'));
});
