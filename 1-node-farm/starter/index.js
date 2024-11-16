const fs = require("fs");
const http = require("http");
const url = require("url");

///////////////////////////////////////////
//Files handleing

// Blockin sync way
// const textFile = fs.readFileSync('./txt/input.txt', 'utf-8')
// const textOut= `thsi is what we know about avocado :${textFile}\n on ${Date.now()}`
// fs.writeFileSync('./txt/input.txt',textOut)
// console.log('writen ')

// non blocking async way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         `./txt/final.txt`,
//         `${data3} \n ${data2}`,
//         "utf-8",
//         (err) => {
//           console.log("works");
//         }
//       );
//     });
//   });
// });
///////////////////////
// http server
const tempOverview = fs.readFile(`${__dirname}/templates/template-overview.html`, "utf-8");
const tempCard = fs.readFile(`${__dirname}/templates/template-.html`, "utf-8");
const temp = fs.readFile(`${__dirname}/templates/template-.html`, "utf-8");

const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    // Overviw page
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");

    //Product page
  } else if (pathName === "/products") {
    res.end("productss");

    // API
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);

    //Not Found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("connection made port 8000 ");
});
