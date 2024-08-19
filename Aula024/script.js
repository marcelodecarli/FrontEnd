let ul = document.createElement('ul');
document.getElementById('ola').appendChild(ul)
let li = document.createElement('li');


document.getElementById('adicionar').addEventListener('click', function() {
    li.textContent = document.getElementById('entrada').value
    ul.appendChild(li)
})

document.getElementById('remover').addEventListener('click', function () {
    ul.removeChild(li)
})