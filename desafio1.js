window.onload = function(){
    let listaProd = document.querySelectorAll("#produtos > li")
    let total = document.querySelector('#mostraTotalCompra')
    let calcuItems = 0
    let naCesta = []
    for(let produto of listaProd){
        produto.addEventListener('click', function(){
            if(naCesta.indexOf(produto.innerHTML) > -1){
                alert(`Este item: ${produto.innerHTML} já está na sua cesta.`)
            } else {
                naCesta.push(produto.innerHTML)
                toNum = Number(produto.dataset.preco)
                calcuItems += toNum
                total.value = (calcuItems/100).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
                let cIValor = document.createAttribute('data-preco')
                cIValor.value = produto.dataset.preco
                let cesItem = document.createElement('li')
                cesItem.innerHTML = produto.innerHTML
                cesItem.setAttributeNode(cIValor)
                document.querySelector('#cestaDoCliente').appendChild(cesItem)
                cesItem.addEventListener('click', function(){
                    cesItem.remove()
                    naCesta.splice(naCesta.indexOf(cesItem.innerHTML), 1)
                    toNum= Number(cesItem.dataset.preco)
                    calcuItems -= toNum
                    total.value = (calcuItems/100).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})})
                }
            })
        }
}