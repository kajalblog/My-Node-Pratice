import http from "http";
const server=http.createServer((req,res)=>{
    // res.setHeader('content-type','text');
    res.writeHead(240,"okay",{'content-type':'text/html'});
    res.end("Response");

});
const PORT=process.env.PORT ||3100;
const HOST="localhost";
server.listen(PORT,HOST,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});