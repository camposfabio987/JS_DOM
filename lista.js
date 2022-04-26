function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function EditarItem(){
    console.log(this.parentElement)
    this.parentElement.edit()
    
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}
function CriarBotaoEditar(){ 
    const botao_editar = document.createElement('button')
    botao_editar.classList.add("btn", "btn-secondary")
    botao_editar.type = "button"
    botao_editar.innerHTML = "Edit"
    botao_editar.addEventListener("click", EditarItem )
    
    return botao_editar
}


function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)
    novo_item_lista.appendChild(CriarBotaoEditar())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}

// fiz até onde deu com os conhecimentos em sala, só faltou a parte de editar mesmo as li's. 











// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
