const btn = document.querySelector('.calculate')

calc = function() {
    var price = parseFloat(document.getElementById('price').value)
    var given = parseFloat(document.getElementById('given').value)
    document.getElementById('result').textContent = (given - price) + "€"
}


btn.addEventListener('click', () => {
    calc()
})
