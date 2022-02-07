/* Variáveis para a iteração do botão lateral do banner*/
var tituloJogo = document.querySelector('#titulo');
var numero = document.querySelector('#numero');
var btnAnterior = document.querySelector('#btn-anterior');
var btnProximo = document.querySelector('#btn-proximo');

/*Variáveis para a iteração do botão comprar */
var btnComprar=document.querySelectorAll('.btn-comprar');

/*Variáveis para iteração do botão modal */
var fecharModal = document.querySelector('.fechar-modal');




/*Logica dos botoes laterais do slide banner */
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

/**Lógica dos botões de compra / ativa modal */
btnComprar.forEach(function(btn){
    btn.addEventListener('click', function(){
        
        /*Ativação do modal */
        let modal=document.querySelector('.modal')
        modal.classList.remove('desativado')
        modal.classList.add('ativado')

        /*Alterando o número da sacola no menu*/
        let contador = document.querySelector('.contador')   
        contador.textContent = '1'

        /*Alteração do botão apos o click */
        btn.textContent='Comprado!'
        btn.style.backgroundColor = '#084154'
    })
})

/**Lógica do botão modal / fechar modal */
fecharModal.addEventListener('click', function(){
    let modal=document.querySelector('.modal')
        modal.classList.remove('ativado')
        modal.classList.add('desativado')      
})
