const http = require('http');
const fs = require('fs');
const os = require('os');

console.log(os.cpus());
console.log(os.arch());
console.log(os.freemem());
const port = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
   if(req.url === '/'){
    fs.readFile(path.join(__dirname,'index.html'), (error,content) =>{
        if(error) throw error;
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(content);
    });

   };

   if(req.url === '/api/users'){
    const users = [
        {name: 'Bob Smith', age: 40},
        {name: 'John Doe', age: 30}

      

    ];
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(users));



   }
});

server.listen(port, function(error){
    if(error){

        console.log('Something went wrong', error)
    }else{

        console.log('Server is listening on port ' + port)
    }



});
    



