//Na teoria dos números recreativos, um número narcisista é um número que é a soma de seus próprios dígitos, cada um elevado ao poder do número de dígitos.


function armstrongNumber(num){

    //Gera um Array com o número fornecido
    var list = num.toString().split('').map(Number)

    //Verifica o tamanho do Array gerado. digts será o expoente 
    var digits = list.length
    var resp = 0

    //Mapeando o Array gerado
    list.map(e => {

        //Cada item é elevado ao número salvo em digits(tamanho do array)
        var total = Math.pow(e, digits)

        //Grava o valor do exponencial na variável resp
        //resp inicalmente é 0
        resp = resp + total
    })

    if(resp == num){
        console.log(`${num} is a Armstrong Number :)`)
    }else{
        console.log(`${num} isn't a Armstrong Number :(`)
    }

}
