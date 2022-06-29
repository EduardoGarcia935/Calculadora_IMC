const form = document.querySelector('.form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if( !altura && !peso){
        setResultado('Peso e altura Inválidos' , false)
        return;
    }
    
    if( !peso){
        setResultado('Peso Inválido' , false)
        return;
    }

    if( !altura){
        setResultado('Altura Inválido' , false)
        return;
    }

    

    const imc = getImc(peso , altura)

    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg , true)

})

function getImc(peso , altura){
    return (peso / altura **2).toFixed(2)
}

function getNivelImc(imc){
    const nivel = ["Abaixo do Peso", "Peso Normal" , "SobrePeso" , "Obesidade grau 1" , "Obesidade grau 2", "Obesidade grau 3"]
    
    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
    
}

function setResultado(msg , isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''

    const p = criaP()

    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('invalido')
    }

    p.innerHTML = msg

    resultado.appendChild(p)
}

function criaP(){
    const p = document.createElement('p')
    return p
}