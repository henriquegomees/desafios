//Sucessão de Fibonacci (também Sequência de Fibonacci), é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores. 

//0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584...

var a = 0
var b = 1
var c = 0

//O parâmetro deve ser a quantidade de números a retornar.
//Ex: fibonacci(9) -> irá retornar os primeiros 9 números da Sequência de Fibonacci
function fibonacci(max){
    for(i = 1; i <= max; i++){
        
        console.log(a)
        c = a + b
        a = b
        b = c

    }
}

fibonacci(8)