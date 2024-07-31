import express from 'express';
const app = express();
import {retornacolecao, validaAno, retornaAno, retornaID, cauculoIPCA } from './servico/servico.js';

app.get('/historicoIPCA', (req, res) =>{
    let anoBusca = req.query.ano

    if(!anoBusca){
        let a = retornacolecao();
        res.json(a);
    }
     else{
        let valido = validaAno(anoBusca) 
         if(valido){

             let anoIPCA = retornaAno(anoBusca)

             res.json(anoIPCA)  
    }
         else{
             res.status(404).json({erro: "Ano invalido"})
         }}
});

app.get('/historicoIPCA/:id', (req, res) =>{

    const id = retornaID(req.params.id)

    if(id){
        res.json(id)
    }
    else{
        res.status(404).json({erro: "Elemento não encontrado"})
    }
})

app.get('/historicoIPCA/calculo/a', (req, res) =>{

    let valor = req.query.valor
    let mesInicial = req.query.mesInicial
    let anoInicial = req.query.anoInicial
    let mesFinal = req.query.mesFinal
    let anoFinal = req.query.anoFinal


    let a = cauculoIPCA(anoInicial, anoFinal, mesInicial, mesFinal,valor)

    res.json(a)
    
})








app.listen(8080, () =>{
    console.log("Servidor iniciado");
});