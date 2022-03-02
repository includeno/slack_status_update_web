const express = require('express');
const cors = require('cors');
const actuator = require('express-actuator');

const app = express();
app.use(actuator());
app.use(express.json());//解析json编码数据
app.use(cors());//不加上这句代码跨域访问时会出现错误，加上就不会出现跨域错误情况
const port = 80;

const {updateStatus}=require('./SlackStatusService');
app.get('/status/update',async(req, res, next) => {
    let result=""
    let code=0;
    try{
        result=await(updateStatus(req.query.token,req.query.text,req.query.emoji,req.query.expiration))
        code=200;
    }
    catch(e){
        result=e.code;
        code=-1;
    }
    let ans={code:code,message:result};
    res.send(JSON.stringify(ans));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});