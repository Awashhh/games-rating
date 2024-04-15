const http = require('http');
const fs = require('fs')
const {mimeTypes, parseBody, staticFile} =  require('./appModules/http-utils')
const path = require('path')
const {
	mainRouteController,
	defaultRouteController,
	gameRouteController,
	voteRouteController,
} = require('./controllers')

const server = http.createServer((req,res)=>{
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, '/index.html', '.html')
      break

    case "/game":
      gameRouteController(res)
      console.log("запрос по url = '/game'")
      break

    case "/vote":
      voteRouteController(req, res);
      console.log("запрос по url = '/vote'")
      break
      
    default:
      defaultRouteController(res, url)
      break
  };
  
});
server.listen(3005);