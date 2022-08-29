// RETORNO DO TEXTO HTML 

var contato = []; 

function calcular() {

    var contatoStorage = localStorage.getItem('contato');

    if (contatoStorage){
        contato = JSON.parse (contatoStorage);
    }

    let inputNome = document.getElementById("nome");
    let inputNumero = document.getElementById("numero");

    let resultado = document.getElementById("resultados");
    
    let nome = inputNome.value;
    let numero = inputNumero.value.length;

    resultado.innerHTML = nome;
    resultado.innerHTML = numero;

    if (numero == 11) {

        resultado.innerHTML = "Contato salvo com sucesso.";

        contato.push({'Nome': nome, 'Número': inputNumero.value});

        console.log(contato)

        localStorage.setItem('contato', JSON.stringify (contato)); // Transformar o objeto em string e salvar em localStorage. 
      
        resultado.innerHTML = "";
        inputNome.value = "";
        inputNumero.value = "";
        
        // document.location.reload()
        
    }

    else if (numero < 11) {
        resultado.innerHTML = "Insira o número completo + o DDD do seu estado." + "\nLembre-se de inserir o digito '9' na frente.";
       
    }

   
    console.log("Calculando...");
}
