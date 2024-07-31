import historicoInflacao from "../dados/dados.js";

function retornacolecao(){
    return historicoInflacao
}

function validaAno(ano){
    if(isNaN(ano)){
        return false
}
else
{
    if(ano >= 2015 && ano <= 2023)
    {
        return true;
    }
    else
    {
        return false;
    }
}
}

function retornaAno(ano){
    let ano2 = Number(ano)
    return historicoInflacao.filter(ipca => ipca.ano == ano2)
}

function retornaID(id){

    return historicoInflacao.find(ipca => ipca.id == id)
}

let anosQueTemos = [2015, 2016, 2017, 2018 , 2019, 2020, 2021, 2022, 2023]


function retornaMeses(inicioAno, fimAno, inicioMes, fimMes){

let arrayFinal = [] 

let b = anosQueTemos.filter(ano => ano >= inicioAno && ano <= fimAno )

let c = b.map(ano => retornaAno(ano))

let c2

let u

if(inicioAno == fimAno){
    let s = c.pop()

    let t = s.filter(ano => ano.mes >= inicioMes && ano.mes <= fimMes)
    
    let v = c.push(t)
    
    c2 = c
}
else{
let e = c.pop()

let f = e.filter(ano => ano.mes <= fimMes)

let g = c.push(f)

c2 = c

}


let az = c.shift()

let bz = az.filter(ano => ano.mes >= inicioMes)

let cz = c.push(bz)

c2 = c
u = c2

u.map(array =>{
    array.map(array =>{
        arrayFinal.push(array)
   }
)
}
)
return arrayFinal
}






function cauculoIPCA(inicioAno, fimAno, inicioMes, fimMes, valor){
    let valorQuase = 1
    let array = retornaMeses(inicioAno, fimAno, inicioMes, fimMes)


    array.map(objeto =>{
        valorQuase = valorQuase * 1 + (objeto.ipca / 100)
   })
   
    let valorFinal = valorQuase * valor


    return valorFinal
}
export {retornacolecao, validaAno, retornaAno, retornaID, cauculoIPCA}