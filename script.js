// RETORNO DO TEXTO HTML 

let inputNome = document.getElementById("nome");
let inputNumero = document.getElementById("numero");

let resultado = document.getElementById("resultados");

function calcular() {

    let nome = inputNome.value;
    let numero = inputNumero.value.length;

    resultado.innerHTML = nome;
    resultado.innerHTML = numero;
    
  

    if (numero == 11) {
        resultado.innerHTML = "Contato salvo com sucesso, " + nome + ".";

    }

    else if (numero < 11) {
        resultado.innerHTML = "Insira o número completo + o DDD do seu estado, " + nome + "." + "\n \nLembre-se de inserir o digito '9' na frente."
    }

   
    console.log("Calculando...");
}
