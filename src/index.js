const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("./text.txt",{encoding:"utf-8"});
const pub = fs.readFileSync("a.html",{encoding:"utf-8"});
const app = http.createServer((req,res)=>{
   
    if(req.url ==="/"){
        if(req.method === "GET"){
            res.write(file);
            res.end();
        }
    }
    else if(req.url === "/public"){
        if(req.method === "GET"){
            res.write(pub);
            res.end();
        }
    }
})

app.listen(8090,()=>{
    console.log("started on: http://localhost:8090")
})