import http from "http";
import fs from 'fs';
const server=http.createServer((req,res)=>{
    // res.setHeader('content-type','text');
    res.writeHead(240,"okay",{'content-type':'text/html'});
    // res.end("Response");
    if(req.url==='/')
    {
        fs.readFile('./public/home.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }
    else if(req.url==='/about')
    {
        fs.readFile('./public/about.html',(err,data)=>{
            if(err) throw err;
            res.end(data);
        })
    }
    else{
        res.end("<h1>404 page not found</h1>")
    }

});
const PORT=process.env.PORT ||3100;
const HOST="localhost";
server.listen(PORT,HOST,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});