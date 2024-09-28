// const http=require("http")
// const fs=require("fs")
// const app=http.createServer((req,res)=>{
//     fs.readFile("./frontend/index.html",(error,data)=>{
// res.write(data);
// res.end();

//     })
// })
// app.listen(3000)


//URL MODULE
// const url=require("url")

// let result=url.parse("https://www.google.com/index.html?username=alan")
// console.log(result);


const http=require ("http")
const fs=require("fs")
const url=require("url")

const app=http.createServer((req,res)=>{

    let newUrl=url.parse(req.url)
    if(newUrl.pathname=="/"){
        fs.readFile("./frontend/index.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        })
    }

   else if(newUrl.pathname=="/about"){
        fs.readFile("./pages/about.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        })
    }
    else{
        fs.readFile("./pages/error.html",(error,data)=>{
            if(error){
                res.writeHead(404,{"content-type":"text/html"})
                return res.end("page not found")
            }
            res.writeHead(200,{"content-type":"text/html"})
            res.write(data)
            res.end()
        })
    }
})
app.listen(3000)