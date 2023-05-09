//SCROLL
ScrollReveal().reveal('.content', { delay: 500});
//FIN DE SCROLL

//EXPRESIONES REGULARES
const nam = /^[A-Za-z]+$/gi 
const message = /^[a-zA-ZÀ-ÿ0-9_\-()/]+$/ 
const email = /^[a-z0-9-._-]+@[a-z]{3,12}.(com|net|web|me|gov|edu|online|shop)$/
const phone = /\d{3}\-\d{3}\-\d{4}/gi
//FIN DE EXPRESIONES REGULARES 


/* Inicio de Variables*/
//Inputs 
const inputNombre = document.getElementById("nombre");
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage = document.getElementById("message");
//Labels
let labelNombre = document.getElementById("label-nombre");
let labelLastName = document.getElementById("label-last");
let labelEmail = document.getElementById("label-email");
let labelPhone = document.getElementById("label-phone");
let labelMessage = document.getElementById("label-message");
/*Fin de Variables*/





/*Inicio de Eventos*/


//Name
inputNombre.addEventListener("keyup", () => {

	labelNombre.classList.remove("label-oculto");

	if (inputNombre.value.match(nam)) {

		labelNombre.classList.remove("fondo-rojo");

		labelNombre.classList.add("fondo-verde");


	} else {
		labelNombre.classList.remove("fondo-verde");

		labelNombre.classList.add("fondo-rojo")

	};
});


//Lastname
inputLastName.addEventListener("keyup", () => {

	labelLastName.classList.remove("label-oculto");

	if (inputLastName.value.match(nam)) {

		labelLastName.classList.remove("fondo-rojo");

		labelLastName.classList.add("fondo-verde");


	} else {
		labelLastName.classList.remove("fondo-verde");

		labelLastName.classList.add("fondo-rojo")

	};
});


//Email
inputEmail.addEventListener("keyup", () => {

	labelEmail.classList.remove("label-oculto");

	if (inputEmail.value.match(email)) {

		labelEmail.classList.remove("fondo-rojo");

		labelEmail.classList.add("fondo-verde");


	} else {
		labelEmail.classList.remove("fondo-verde");

		labelEmail.classList.add("fondo-rojo")

	};
});
/*Fin de Eventos*/


//Phone
inputPhone.addEventListener("keyup", () => {

	labelPhone.classList.remove("label-oculto");

	if (inputPhone.value.match(phone)) {

		labelPhone.classList.remove("fondo-rojo");

		labelPhone.classList.add("fondo-verde");


	} else {
		labelPhone.classList.remove("fondo-verde");

		labelPhone.classList.add("fondo-rojo")

	};
});

//Message
inputMessage.addEventListener("keyup", () => {

	labelMessage.classList.remove("label-oculto");

	if (inputMessage.value.match(message)) {

		labelMessage.classList.remove("fondo-rojo");

		labelMessage.classList.add("fondo-verde");


	} else {
		labelMessage.classList.remove("fondo-verde");

		labelMessage.classList.add("fondo-rojo")

	};
});



const form = document.getElementById("contact");
const enviar = document.getElementById("send");

enviar.addEventListener( "click", (e) => {
	e.preventDefault();
	document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
}, 3000);























//Case
/*let validationCase = (e) => {
    switch (e.target.name) {
		case " name ":
			validation(expresiones.name, e.target, 'name');
		break;

		case " last name ":
			validation(expresiones.lastName, e.target, 'last name');
		break;
		
		case " email ":
			validation(expresiones.email, e.target, 'email');
		break;

		case " phone ":
			validation(expresiones.phone, e.target, 'phone');
		break;

        case " message ":
            validation(expresiones.message, e.target, 'message');
            break;
	}
}*/

/*const validation = (expresiones, input, camp) => {
	if(expresion.test(input.value)){
		document.getElementById(`name${camp}`).classList.remove('validation-incorrect');
		document.getElementById(`name${camp}`).classList.add('validation-correct');
		document.getElementsByClassName(`icon${camp} i`).classList.add('fa-check-circle');
		document.getElementsByClassName(`icon${camp} i`).classList.remove('fa-times-circle');
		camps[camp] = true;
	} else {
		document.getElementById(`name${camp}`).classList.remove('validation-incorrect');
		document.getElementById(`name${camp}`).classList.add('validation-correct');
		document.getElementsByClassName(`icon${camp} i`).classList.add('fa-times-circle');
		document.getElementsByClassName(`icon${camp} i`).classList.remove('fa-check-circle');
		camps[camp] = false;
	}
}*/


