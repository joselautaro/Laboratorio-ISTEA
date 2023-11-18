const jsonData = {
    "moneda": "USD",
    "casa": "blue",
    "nombre": "Blue",
    "compra": 915,
    "venta": 958,
    "fechaActualizacion": "2023-11-17T20:55:00.000Z"
};

// obtener los elementos del dom

const changeBtn = document.getElementById('changeBtn');

const dollarValue = document.getElementById('dollarValue');

const changeBody = document.getElementById('changeBody');

const darkModeToggle = document.getElementById('darkModeToggle');

const clockDiv = document.getElementById('clock');

//Funcion para mostrar el alerta de cambios
const showAlert = () =>{
    Swal.fire({
        icon: "info",
        title: "Hubo cambios en el dolar",
        showConfirmButton: false,
        timer: 5000
      });
}

//Función para actualizar el reloj

const updateClock = () =>{
    // Obtenemos con el métood Date la fecha y hora actual de Argentina
    const now = new Date();
    
    //Obtener la hora que es a partir de la variable
    const hours = now.getHours();

     //Obtener los minutos
    const minutes = now.getMinutes();
    
    //Obtener los segundos
    const seconds = now.getSeconds();

    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

//Actualizar reloj cada segundo
setInterval(updateClock, 1000);

// Función para cambiar a dark mode
const toggleDarkMode = () =>{
    document.body.classList.toggle('dark-mode');
}

//Escuchador de eventos
darkModeToggle.addEventListener('click', toggleDarkMode);

// Mostrar el valor del dolar

const mostrarValorDolar = () =>{
    dollarValue.textContent = `
    $${jsonData.compra} (Compra) - $${jsonData.venta} (Venta)
    `
}

mostrarValorDolar();

// Mostrar cambios en modal

changeBtn.addEventListener('click', () =>{
    changeBody.textContent = `Compra anterior: $${jsonData.compra} - Venta anterior: $${jsonData.venta}`
    // $('#changeModal').modal('show');

    //Simular alertas de cambio 
    showAlert();
})
   
