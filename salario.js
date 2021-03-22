window.addEventListener('load',function(){

    document.querySelector('#btn').addEventListener('click',function(){
        CalculaSalario();
    });
});

function CalculaSalario() {
    var salario = parseFloat(document.querySelector("#desconto").value);
    var desconto;
    if(salario <= 1000) {
        desconto=0.1;
        } else if(salario <= 2000){
                desconto=0.15;
            } else if(salario <= 3000){
                  desconto=0.2;
                    } else {
                        desconto=0.25;
                    }
                        
                    
        

    var resultado=salario-(salario*desconto);

    document.querySelector('#resultado').innerHTML= "Seu sálario real é " + resultado;
    
}