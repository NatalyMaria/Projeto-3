import {createServer} from 'node:http';
import fs from "node:fs";

import lerDadosReceitas from "./helper/lerReceitas.js"

const PORT = 3333;

const server = createServer((request, response)=>{
    const {url, method} = request;
    //#152 - adicionar a rota GET receitas com essas
    if(method === 'GET' && url === "/receitas"){
        lerDadosReceitas((err, receitas)=>{
            if(err){
                response.writeHead(500, {"Content-Type": "application/json"})
                response.end(JSON.stringify({message: "Erro ao ler os dados"}))
                return
            }
            //imprimir o resultado
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(JSON.stringify(receitas))
        })
    }else if(method === 'POST' && url === '/receitas'){

    }else if(method === 'GET' && url.startsWith('/receitas/')){
        
    }else if(method === 'PUT' && url.startsWith('/receitas/')){
        
    }else if(method === 'DELETE' && url.startsWith('/receitas/')){
        
    }else if(method === 'GET' && url.startsWith('/categorias/')){
        
    }else if(method === 'GET' && url.startsWith('/busca')){
        
    }else if(method === 'GET' && url.startsWith('/ingredientes')){
        
    }else{
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: 'Página não encontrada'}))
    }
});

server.listen(PORT, () =>{
    console.log(`Servidor on port http://localhost:${PORT}`);
});