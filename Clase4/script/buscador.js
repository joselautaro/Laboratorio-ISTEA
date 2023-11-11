//Guardar en una variable el id de resultado

const resultado = document.querySelector("#resultado");

const formulario = document.querySelector("#formulario");

//Establacemos una arraw function para filtrar
const filtrar = () =>{

    resultado.innerHTML = '';

    //Declaramos una constante donde se guarde la info escrita en formulario y la pasamos a LowerCase();

    const texto = formulario.value.toLowerCase();

    for ( let producto of productos ){
        let nombre = producto.nombre.toLowerCase();

        if( nombre.indexOf(texto) !== -1 ){
            resultado.innerHTML += `
            <div class="card mt-4" style="width: 18rem;" id="resultado">
                <img src=${producto.imagen} alt="imagen-perro" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h5 class="card-title">${producto.destino}</h5>
                        <p>Valor: $${producto.valor}</p>
                    </div>
            </div>
            `
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();