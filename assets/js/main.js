// FUNÇÃO PARA ABRIR E FECHAR MODAL 

var abrirModal = document.getElementById('btn-abrir')

let fecharModal = document.getElementById('fecharModal')

let modal = document.getElementById('modal')

abrirModal.onclick = function(event) {
    event.preventDefault()
    modal.classList.add('visivel')
}

// for (abrirModal of )

fecharModal.onclick = function(){
    modal.classList.remove('visivel')
}