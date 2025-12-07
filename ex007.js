function somar() {
    let textNumber1 = document.getElementById("number1")
    let textNumber2 = document.getElementById("number2")
    let res = document.getElementById("res")
    let n1 = Number(textNumber1.value)
    let n2 = Number(textNumber2.value)
    let soma = n1 + n2
    res.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}!`
}


