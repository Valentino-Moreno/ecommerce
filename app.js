//----- aca me da el error

const inputNombre = document.querySelector('#user')
const inputApellido = document.querySelector('#apellido')
const divBienvenida = document.querySelector('#bienvenida')
const divSaludar = document.querySelector('#saludar')

const botonIngresar = document.querySelector('#ingresar')

botonIngresar.onclick = () => {
    if(inputNombre.value || inputApellido){
        const usuario ={
            name: inputNombre.value,
            apellido: inputApellido.value,
        }
        localStorage.setItem('infoUsuario',JSON.stringify(usuario))
        divBienvenida.remove()
        const saludarTitulo = document.createElement('h2')
        saludarTitulo.innerText(`Bienvenido ${usuario.name}`)
        divSaludar.append(saludarTitulo)
        
    }  
}

// --------------


const stockProductos = [
    {
        id: 1,
        nombre: "Malbec 200",
        cantidad: 1,
        desc: "fsdfsdfsdfsdfsdf",
        precio: 1200,
        img: "img/vinos.jpg",
      },
      {
        id: 2,
        nombre: "Malbec 500",
        cantidad: 1,
        desc: "fsdfsdfsdfsdfsdf",
        precio: 4200,
        img: "img/vinos.jpg",
      },
      {
        id: 3,
        nombre: "Malbec 300",
        cantidad: 1,
        desc: "fsdfsdfsdfsdfsdf",
        precio: 2200,
        img: "img/vinos.jpg",
      },
      {
        id: 4,
        nombre: "Malbec 3400",
        cantidad: 1,
        desc: "fsdfsdfsdfsdfsdf",
        precio: 1500,
        img: "img/vinos.jpg",
      },
      {
        id: 5,
        nombre: "Malbec 230",
        cantidad: 1,
        desc: "fsdfsdfsdfsdfsdf",
        precio: 120,
        img: "img/vinos.jpg",
      }
];

let carrito =[];

const contenedor = document.querySelector('#contenedor')
stockProductos.forEach((prod) => {
    const {id,nombre,precio,desc,img,cantidad} = prod
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top mt-2" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${precio}</p>
    <p class="card-text">${desc}</p>
    <p class="card-text">${cantidad}</p>

    <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar Producto</button>
  </div>
</div>
    `
})

function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito = () =>{
    const modalBody= document.querySelector('.modal .modal-body')
    modalBody.innerHTML = ''
    carrito.forEach((prod)=>{
        const {id,nombre,img, cantidad,precio} = prod
        modalBody.innerHTML +=
        `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `
    })
}