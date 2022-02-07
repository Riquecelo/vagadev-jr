var tituloJogo = document.querySelector('#titulo');
var numero = document.querySelector('#numero');
var btnAnterior = document.querySelector('#btn-anterior');
var btnProximo = document.querySelector('#btn-proximo');

var alternador = true;

btnAnterior.addEventListener('click', function(e){
    e.preventDefault();
    if(alternador){
        numero.textContent='2/2';
        tituloJogo.textContent='RED DEAD II';
        alternador=false;
    }else{
        numero.textContent='1/2';
        tituloJogo.textContent='Mortal Kombat'
        alternador=true;
    }  
})

btnProximo.addEventListener('click', function(e){
    e.preventDefault();
    if(alternador){
        numero.textContent='2/2';
        tituloJogo.textContent='RED DEAD II';
        alternador=false;
    }else{
        numero.textContent='1/2';
        tituloJogo.textContent='MORTAL KOMBAT'
        alternador=true;
    }  
})