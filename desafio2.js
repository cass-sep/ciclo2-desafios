window.onload = function(){
    let btn = document.getElementById('botao-input')
    let ctCep = document.getElementById('ct-cep')
    let ctList = document.querySelectorAll('#borda > .fete')
    btn.addEventListener('click', buscar)

    async function buscar(){
        let url = `https://viacep.com.br/ws/${ctCep.value}/json/`
        try {
            let cepFet = await fetch(url)
            let cepData = await cepFet.json()
            ctList.forEach(caixa => {
                caixa.value = cepData[caixa.id]
            })
        } catch (error){
            alert(error)
        }

    }
}