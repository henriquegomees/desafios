//Regras:
//Dado um número x, conte de 1 até x
//Se x for divisível por 3, o output será: Fizz
//Se x for divisível por 5, o output será: Buzz
//Se x for divisível por 3 e por 5, o output será: FizzBuzz

function fizzbuzz(max){
    var i = 1
    while(i <= max){
        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log('FizzBuzz')
            }else{
                console.log('Fizz')
            }
        }else if(i % 5 == 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
        i++
    }
}

function recursiveFizzBuzz(num){
    
    if(num < 1){return false}

    if(num % 3 == 0){
        if(num % 5 == 0){
            console.log('FizzBuzz')
        }else{
            console.log('Fizz')
        }
    }else if(num % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(num)
    }
    recursiveFizzBuzz(num - 1)
}
