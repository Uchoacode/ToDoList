function mostrar() {
    let input = document.getElementById("entrada").value.trim();
    let erroContainer = document.getElementById("erro-container");
    let mensagemErro = document.getElementById("mensagem-erro");

    if (input === "") {
        if (!mensagemErro) {
            let resposta = document.createElement("p");
            resposta.id = "mensagem-erro";
            resposta.className = "erro";
            resposta.innerHTML = "Digite Alguma Coisa";
            erroContainer.append(resposta);
        }
        return;
    }

    if (mensagemErro) {
        mensagemErro.remove(); 
    }

    let div = document.createElement("div");
    div.className = "lista";

    let tarefaContainer = document.createElement("div");
    tarefaContainer.className = "tarefa-container";

    let tarefa = document.createElement("p");
    tarefa.innerHTML = input;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            tarefa.classList.add("riscar");
        } else {
            tarefa.classList.remove("riscar");
        }
    });

    tarefaContainer.append(checkbox, tarefa);

    let butao = document.createElement("button");
    butao.innerHTML = "Remover";

    butao.addEventListener("click", () => {
        div.remove();
    });

    div.append(tarefaContainer, butao);
    document.getElementById("lista2").append(div);

    document.getElementById("entrada").value = ""; // Limpa o campo de entrada após adicionar
}
