function abrirMenu(){
    let barraMenuAberto = document.getElementById('barra-menu')

    if(barraMenuAberto.style.width == "0px"){
        barraMenuAberto.style.width = "250px";
    }else{
        barraMenuAberto.style.width = "0px";
    }
}

function processaFormulario(event){
    event.preventDefault();
    let dados = {}
    dados.nome = event.target.elements["nome"].value;
    dados.email = event.target.elements["email"].value;
    dados.sexo = event.target.elements["sexo"].value;
    dados.estadocivil = event.target.elements["estadocivil"].value;
    dados.datanascimento = event.target.elements["datanascimento"].value;
    dados.mensagem = event.target.elements["mensagem"].value;

    const jsonDados = JSON.stringify(dados);
    console.log(jsonDados);
    console.log(JSON.parse(jsonDados));

    for (const [key, value] of Object.entries(dados)) {
        console.log(`${key}: ${value}`);
      }

    // dados.sexo = 
}

var x = 0;

const cadastroForm = document.getElementById("cadastro");
cadastroForm.addEventListener("submit", processaFormulario);