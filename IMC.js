function calcular() {
  var peso = document.querySelector("#peso").value
  var altura = (document.querySelector("#altura").value)/100
  var total = (peso / altura**2).toFixed(2)
  var res = document.getElementById('res')
  if (total < 18) {
    res.innerHTML = `IMC: ${total} </br> Você esta muito abaixo do PESO!`
  } else if (total < 18.5) {
    res.innerHTML =  `IMC: ${total} </br> Você esta abaixo do PESO!`
  }else if (total < 25 ) {
    res.innerHTML =  `IMC: ${total} </br> Você esta no PESO IDEAL!`
  }else if (total < 30) {
    res.innerHTML =  `IMC: ${total} </br> Você esta SOBREPESO!`
  }else if (total < 35 ) {
    res.innerHTML =  `IMC: ${total} </br> Você esta OBESO!`
  }else if (total  < 40) {
    res.innerHTML =  `IMC: ${total} </br> Você esta com OBESIDADE SEVERA!`
  }else {
    res.innerHTML =  `IMC: ${total} </br> Você esta com OBSIDADE MÓRBIDA!`
  }
}