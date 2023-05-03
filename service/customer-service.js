import CustomerModel from "./models/customer-model.js";
const URL_API = "https://645284a7a2860c9ed40e7f22.mockapi.io/"
const refRegistro= document.querySelector("#registro");
const refListar = document.querySelector("#listar");
const refBuscar = document.querySelector("#buscar");


const getCustomers = async() => {
    try {
        const respuesta = await fetch (`${URL_API}/customers`);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            viewDataHTML(datos);
        }else if (respuesta.status === 401){
            console.log("la url no es correcta");
        }else if (respuesta === 404){
            console.log("no se encontro el elmento");
        }else{
            console.log("se presento un error consulte con los desarrolladores");
        }

    }
    catch (error){
        console.log(error);

    }
}
function saveCustomer(){
    CustomerModel.createdAt = '2023-02-06';
    CustomerModel.nombres='Juan David';
    CustomerModel.apellidos='Caceres';
    CustomerModel.email='juan@gmail.com';
    CustomerModel.numeroMovil='15454642';
    CustomerModel.fechaNacimiento='2006-03-02';
    posCustomer(CustomerModel);
}

function VerOcultar(divsVisible){
    console.log(divsVisible);

}
refListar.addEventListener("click",getCustomers);
refRegistro.addEventListener("click",(e)=>{
    VerOcultar('#registro',['#listar','#buscar']);
    e.preventDefault();
    e.stopImmediatePropagation();
});


function viewDataHTML(dataCustomer){
    console.log(dataCustomer)
}