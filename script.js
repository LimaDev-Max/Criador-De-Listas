const win = document.getElementById('win')
const los = document.getElementById('los')
const qtds = document.getElementById('qtds')
const btn = document.getElementById('btn')
const cor = document.getElementById('vp')
const time = document.getElementById('time')
const res = document.getElementById('resultado')
const btnCopy = document.getElementById('copy')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (hora.value == 0) {
        alert('Informe o horario de referencia')
    }

    res.innerHTML = ''

    let dom1 = Number(hora.value.split(':')[0])
    let dom2 = Number(hora.value.split(':')[1])
  
    // let dom3 = Number(hora.value.split(':')[2]) para quando for usar os segundos
    // ('0000' + 12).slice(-4)
    if (cor.value == 0) {
        alert('Selecione Uma Cor')
    }
    else {
        if (qtds.value == 0) {
            alert('Informe a quantidade de sinais a ser Gerados')
        }
        for (i = 0; i < qtds.value; i++) {
            dom2 += Number(time.value)
            if (dom2 > 59) {
                dom2 -= 60
                dom1 += 1
            }
            if(dom1 > 23){
                dom1 -= 24
            }

            if(cor.value == 1){

                res.innerHTML += `${dom1}:${dom2} &#x1F534;&#x26AA;<br>`
            }
            else{
                res.innerHTML += `${dom1}:${dom2} &#x26AB;&#x26AA;<br>`
            }
        }
    }

})

btnCopy.addEventListener("click", e =>{
    navigator.clipboard.writeText(res.innerText)
    })