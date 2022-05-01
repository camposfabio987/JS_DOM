function DeleteItem(){
    this.parentElement.remove()
}

function EditarItem(){
    
    item_lista = this.parentElement
    texto_item_lista = item_lista.innerText.replace("DeleteEdit", " ")
    add_element = document.querySelector('[data-form-input]')
    add_element.value = texto_item_lista 
    
    const botao_submit = document.querySelector('[button-submit]')
    

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.remove('d-none')

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
    

    document.getElementById("item").value = ""
}
 
function Edit(){
    
    add_texto = add_element.value
    item_lista.innerHTML = add_texto

    const botao_submit = document.querySelector('[button-submit]')
    botao_submit.classList.remove('d-none')
    botao_submit.classList.add('btn', 'btn-primary')

    const botao_edit = document.querySelector('[button-edit]')
    botao_edit.classList.add('d-none')

    input_element.value = ''

}










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
