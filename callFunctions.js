import { lerDados, createUser, deleteUser, updateUser } from "./crud.js";

function callCreate(){
    document.querySelector('.container-home').classList.add('invisible');
    document.querySelector('.container-create').classList.remove('invisible');

    document.querySelector('.botao-flutuante').classList.remove('invisible');
}

function callUpdate(){
    document.querySelector('.container-home').classList.add('invisible');
    document.querySelector('.container-update').classList.remove('invisible');

    document.querySelector('.botao-flutuante').classList.remove('invisible');
}

function callDelete(){
    document.querySelector('.container-home').classList.add('invisible');
    document.querySelector('.container-delete').classList.remove('invisible');

    document.querySelector('.botao-flutuante').classList.remove('invisible');
}

function callRead(){
    document.querySelector('.container-home').classList.add('invisible');
    document.querySelector('.container-read').classList.remove('invisible');
    
    document.querySelector('.botao-flutuante').classList.remove('invisible');

    lerDados();
}

var btnCreate = document.querySelector('.btnCreate');
var btnUpdate = document.querySelector('.btnUpdate');
var btnDelete = document.querySelector('.btnDelete');
var btnRead = document.querySelector('.btnRead');

btnCreate.addEventListener("click", function(){
    callCreate();
});

btnUpdate.addEventListener("click", function(){
    callUpdate();
});

btnDelete.addEventListener("click", function(){
    callDelete();
});

btnRead.addEventListener("click", function(){
    callRead();
    lerDados();
});



var submitCreate = document.querySelector('.submitCreate');

submitCreate.addEventListener("click", function(){
    createUser();
});

var submitDelete = document.querySelector('.submitDelete');

submitDelete.addEventListener("click", function(){
    deleteUser();
});

var submitUpdate = document.querySelector('.submitUpdate');

submitUpdate.addEventListener("click", function(){
    updateUser();
});



