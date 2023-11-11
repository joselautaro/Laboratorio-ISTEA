const productos = [
    {
        //clave: valor
        nombre: 'Mesa',
        destino: 'Comedor',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 25000
    },
    {
        nombre: 'Escritorio',
        destino: 'Oficina',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 15000
    },
    {
        nombre: 'Cama',
        destino: 'Dormitorio',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 100000
    },
    {
        nombre: 'Silla',
        destino: 'Multifunción',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 10000
    },
    {
        nombre: 'Televisor',
        destino: 'Multifunción',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 900000
    },
    {
        nombre: 'Celular',
        destino: 'Bolsillo',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 1500000
    },
    {
        nombre: 'Computadora',
        destino: 'Escritorio',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 450000
    },
    {
        nombre: 'Lampara',
        destino: 'Multirubro',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 1000
    },
    {
        nombre: 'Ropero',
        destino: 'Dormitorio',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 450000
    },
    {
        nombre: 'Heladera',
        destino: 'Cocina',
        imagen: 'https://picsum.photos/id/237/200/300',
        valor: 450500
    },
]
//Declaramos una constante producto seleccionando el aributo de id resultado
const producto = document.getElementById("resultado");

const catalogo = () => {
    //Declaramos un for para interar y recorrer el array de objetos
    for (let producto of productos) {
        producto.innerHTML += `
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