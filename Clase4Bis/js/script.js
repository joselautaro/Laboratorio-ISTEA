document.getElementById("cotizadorForm").addEventListener("submit", function (e) {
    e.preventDefault();



    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const precio = document.getElementById("precio").value;
    const descuento = document.getElementById("descuento").value;

    if (isNaN(precio)) {
        showModal("Por favor introduce un precio válido")
    } else {

        let precioTotal = precio;

        if (!isNaN(descuento)) {
            precioTotal -= descuento;
        }

        setTimeout(() =>{
            const cotizacionInfo = document.getElementById("cotizacionInfo");
            cotizacionInfo.innerHTML = `
                <h3>Cotizando...</h3>
            `
            showModal()
        }, 100)

        //Simular una espera sincrónica de 2 segundos

        setTimeout(() => {

            const cotizacionInfo = document.getElementById("cotizacionInfo");

            cotizacionInfo.innerHTML = `
        <p>Marca: ${marca}</p>
        <p>Modelo: ${modelo}</p>
        <p>Precio total: $${precio}</p>
        <p>Descuento: ${descuento}</p>
        `;
            showModal()
        }, 3000)
    }
})

const showModal = () => {

    const modal = document.getElementById("myModal");

    modal.style.display = 'block';

    //Cerrar el modal cuando hacemos click en la x

    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        modal.style.display = 'none';
    })
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            cotizadorForm.reset();
        }
    })

}