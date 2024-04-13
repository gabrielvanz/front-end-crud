export function createUser() {
    var id =Math.floor(Math.random() * 1000);
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var cidade = document.getElementById('cidade').value;

    var userData = `{"Id": "${id}", "Nome": "${nome}", "Idade": "${idade}", "Cidade": "${cidade}"}`;
    var userDataParsed = JSON.parse(userData)

    var mensagemErroCreate = document.getElementById('mensagemErroCreate');
    if (userDataParsed.Idade.trim() === "" || userDataParsed.Idade.trim() === "" || userDataParsed.Cidade.trim() === "") {
        mensagemErroCreate.style.display = 'block';

        // Esconde a mensagem após 5 segundos
        setTimeout(function() {
            mensagemErroCreate.style.display = 'none';
        }, 5000);
        return console.log('Err: Todos os campos devem ser preenchidos!')
    } else {
        mensagemErroCreate.style.display = 'none';
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('cidade').value = '';
    }

    console.log(userData)
    saveToTxt(userData);

    var mensagemSucesso = document.getElementById('mensagemSucesso');
    
    if (mensagemSucesso.style.display !== 'block') {
        mensagemSucesso.style.display = 'block';

        setTimeout(function() {
            mensagemSucesso.style.display = 'none';
        }, 5000);
    }
}

function saveToTxt(data) {
    var existingData = localStorage.getItem('dados_usuario');
    var usersArray = existingData ? JSON.parse(existingData) : [];
    usersArray.push(JSON.parse(data));
    localStorage.setItem('dados_usuario', JSON.stringify(usersArray));
    console.log('Dados do usuário salvos com sucesso.');
}


export function lerDados() {
    const listaUsuarios = document.getElementById("listaUsuarios");
    listaUsuarios.innerHTML = "";

    const dadosUsuarios = localStorage.getItem("dados_usuario");
    if (dadosUsuarios) {
        const usuarios = JSON.parse(dadosUsuarios);

        usuarios.forEach((usuario) => {
            const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.textContent = usuario.Id;
            tr.appendChild(tdId);

            const tdNome = document.createElement("td");
            tdNome.textContent = usuario.Nome;
            tr.appendChild(tdNome);

            const tdIdade = document.createElement("td");
            tdIdade.textContent = usuario.Idade;
            tr.appendChild(tdIdade);

            const tdCidade = document.createElement("td");
            tdCidade.textContent = usuario.Cidade;
            tr.appendChild(tdCidade);

            listaUsuarios.appendChild(tr);
        });
    } else {
        const itemLista = document.createElement("tr");
        const tdMensagem = document.createElement("td");
        tdMensagem.setAttribute("colspan", 4);
        tdMensagem.textContent = "Nenhum usuário encontrado.";
        itemLista.appendChild(tdMensagem);
        listaUsuarios.appendChild(itemLista);
    }
}

export function updateUser() {
    var id = document.getElementById('idUpdate').value;
    var idade = document.getElementById('idadeUpdate').value;
    var cidade = document.getElementById('cidadeUpdate').value;

    var dadosUsuarios = localStorage.getItem('dados_usuario');

    if (dadosUsuarios) {
        var usuarios = JSON.parse(dadosUsuarios);

        var usuarioIndex = usuarios.findIndex(function(usuario) {
            return usuario.Id === id;
        });

        if (usuarioIndex !== -1) {
            var mensagemErroUpdate = document.getElementById('mensagemErroUpdate');
            if (usuarios[usuarioIndex].Idade.trim() === "" || usuarios[usuarioIndex].Cidade.trim() === "") {
                mensagemErroUpdate.style.display = 'block';

                setTimeout(function() {
                    mensagemErroUpdate.style.display = 'none';
                }, 5000);
                return console.log('Err: Todos os campos devem ser preenchidos!')
            } else {
                mensagemErroUpdate.style.display = 'none';
                document.getElementById('idUpdate').value = '';
                document.getElementById('idadeUpdate').value = '';
                document.getElementById('cidadeUpdate').value = '';
            }
            usuarios[usuarioIndex].Idade = idade;
            usuarios[usuarioIndex].Cidade = cidade;

            localStorage.setItem('dados_usuario', JSON.stringify(usuarios));

            var mensagemSucessoUpdate = document.getElementById('mensagemSucessoUpdate');
            mensagemSucessoUpdate.style.display = 'block';

            setTimeout(function() {
                mensagemSucessoUpdate.style.display = 'none';
            }, 5000);
        } else {
            alert('Usuário com ID fornecido não encontrado!');
        }
    } else {
        alert('Nenhum usuário encontrado para atualização!');
    }

    document.getElementById('idUpdate').value = '';
    document.getElementById('idadeUpdate').value = '';
    document.getElementById('cidadeUpdate').value = '';
}

export function deleteUser() {
    var id = document.getElementById('deleteId').value;

    var dadosUsuarios = localStorage.getItem('dados_usuario');

    if (dadosUsuarios) {
        var usuarios = JSON.parse(dadosUsuarios);

        var usuarioIndex = usuarios.findIndex(function(usuario) {
            return usuario.Id === id;
        });

        if (usuarioIndex !== -1) {
            usuarios.splice(usuarioIndex, 1);

            localStorage.setItem('dados_usuario', JSON.stringify(usuarios));

            var mensagemSucessoDelete = document.getElementById('mensagemSucessoDelete');
            mensagemSucessoDelete.style.display = 'block';

            setTimeout(function() {
                mensagemSucessoDelete.style.display = 'none';
            }, 5000);
        } else {
            alert('Usuário com ID fornecido não encontrado!');
        }
    } else {
        alert('Nenhum usuário encontrado para exclusão!');
    }

    document.getElementById('deleteId').value = '';
}
