let incremente = document.createElement('button')
incremente.textContent = 'incremente'
incremente.setAttribute('id', 'buttonIncremente')
document.body.appendChild(incremente)


let decremente = document.createElement('button')
decremente.textContent = 'decremente'
decremente.setAttribute('id', 'buttonDecremente')
document.body.appendChild(decremente)

let p = document.createElement('p')
p.textContent = 0
//p.setAttribute('id', 'paragrafoContar')
document.body.appendChild(p)


document.getElementById('buttonIncremente').addEventListener('click',
    () => p.textContent = Number(p.textContent) + 1)

document.getElementById('buttonDecremente').addEventListener('click',
    () => p.textContent = parseInt(p.textContent) - 1)