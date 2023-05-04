import CustomerModel from "./models/customer-model.js";
const URL_API = "https://645284a7a2860c9ed40e7f22.mockapi.io/"
const formRegistro = document.querySelector("#frmData");
const inputFrm = document.forms['frmData'];
const botones = document.querySelectorAll(".btn")



const myHeaders = new Headers({
	"Content-Type": "application/json"
});

const postCustomer = (datos) =>{
    fetch(`${URL_API}/customers`,
    {
        method:"POST",
        headers: myHeaders,
        body:JSON.stringify(datos)
    })
    .then(res =>{
        return res.json();
    }).then(res =>{
        console.log(res);
    }).then(err =>{
        console.log(err);
    })
    
}

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
    CustomerModel.createdAt ='2023-02-06';
    CustomerModel.nombres='Juan David';
    CustomerModel.apellidos='Caceres';
    CustomerModel.email='juan@gmail.com';
    CustomerModel.numeroMovil='15454642';
    CustomerModel.fechaNacimiento='2006-03-02';
    postCustomer(CustomerModel);
}

function VerOcultar(divsVisible){
    console.log(divsVisible);

}


document.querySelectorAll('.tabOpcion').forEach((val,id)=>{
    val.addEventListener("click",(e)=>{
        let datos = JSON.parse(e.target.dataset.verocultar);
        let cardVer = document.querySelector(datos[0]);

        cardVer.style.display = 'block';
        datos[1].forEach(card => {
            let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        });
        e.stopImmediatePropagation();
        e.preventDefault();
    })
});


function viewDataHTML(dataCustomer){
    console.log(dataCustomer)
}
document.querySelector("#btnNuevo").addEventListener("click",(e)=>{
    inputFrm.querySelectorAll('.form-control').forEach((e) => {
        if(e.name == 'createdAt'){
            e.valueAsDate = new Date()
            e.disabled = true;
        }
        else{
            e.value ='';
        }
    })
document.querySelector("#btnCancelar").addEventListener("click",(e)=>{
    document.querySelectorAll('.btn').forEach((element) =>{
        console.log(element);
        element.disabled=true;
        if((element.id == 'btnNuevo')){
            element.classList.remove('disabled');

        }
        else{
            element.classList.toggle('disabled');
        }
    })
  })
})

document.querySelector("#btnGuardar").addEventListener("click",(e)=>{
    const datos = Object.fromEntries(new FormData(formRegistro).entries());
    console.log(datos)
    postCustomer(datos);
})