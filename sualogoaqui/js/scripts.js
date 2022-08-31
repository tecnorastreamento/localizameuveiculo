$(document).ready(function() {
	$("#menumobile").mmenu();
    // scrollSite();
});








$(function() {
  $('a#toTop').bind('click',function(event){
	  var $anchor = $(this);
	
	  $('html, body').stop().animate({
		  scrollTop: $($anchor.attr('href')).offset().top}, 800,'easeInOutExpo');
	  /*
	  if you don't want to use the easing effects:
	  $('html, body').stop().animate({
		  scrollTop: $($anchor.attr('href')).offset().top
	  }, 1000);
	  */
	  event.preventDefault();
  });
});










$('#telefone, #celular').focusout(function(){
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if(phone.length > 10) {
        element.mask("(99) 99999-999?9");
    } else {
        element.mask("(99) 9999-9999?9");
    }
}).trigger('focusout');













function ValidaOrcamento(){

if (document.formorcamento.nome.value == ""){
	swal({ 
		title: "Preencha o campo Nome!",
		type: "warning"
	},
	function(){
		window.setTimeout(function () { 
		$('#nome').focus();
		}, 0);
	});
	return false;
}




if (document.formorcamento.telefonee.value == ""){
	swal({ 
		title: "Preencha o campo telefone!",
		type: "warning"
	},
	function(){
		window.setTimeout(function () {
		$('#telefonee').focus();
		}, 0);
	});
	return false;
}


if (document.formorcamento.email2.value == ""){
	swal({ 
		title: "Informe seu E-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email2').focus();
		}, 0);
	});
	return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = document.formorcamento.email2.value.indexOf("@");
parte2 = document.formorcamento.email2.value.indexOf(".");
parte3 = document.formorcamento.email2.value.length;
if (!(parte1 >= 1 && parte2 >= 2 && parte3 >= 3)) {
	swal({ 
		title: "Digite corretamente seu e-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email2').focus();
		}, 0);
	});
	return false;
}


	return true;
}













function ValidaNewsletter(){

if (document.formnewsletter.email.value == ""){
	swal({ 
		title: "Informe seu E-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email').focus();
		}, 0);
	});
	return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = document.formnewsletter.email.value.indexOf("@");
parte2 = document.formnewsletter.email.value.indexOf(".");
parte3 = document.formnewsletter.email.value.length;
if (!(parte1 >= 1 && parte2 >= 2 && parte3 >= 3)) {
	swal({ 
		title: "Digite corretamente seu e-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email').focus();
		}, 0);
	});
	return false;
}

	return true;
}













function ValidaContato(){


if (document.formcontato.nome.value == ""){
	swal({ 
		title: "Informe seu Nome!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#nome').focus();
		}, 0);
	});
	return false;
}

if (document.formcontato.email3.value == ""){
	swal({ 
		title: "Informe seu E-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email3').focus();
		}, 0);
	});
	return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = document.formcontato.email3.value.indexOf("@");
parte2 = document.formcontato.email3.value.indexOf(".");
parte3 = document.formcontato.email3.value.length;
if (!(parte1 >= 1 && parte2 >= 2 && parte3 >= 3)) {
	swal({ 
		title: "Digite corretamente seu e-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email3').focus();
		}, 0);
	});
	return false;
}

if (document.formcontato.cidade.value == ""){
	swal({ 
		title: "Informe sua Cidade!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#cidade').focus();
		}, 0);
	});
	return false;
}

if (document.formcontato.celular.value == ""){
	swal({ 
		title: "Informe seu Celular!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#celular').focus();
		}, 0);
	});
	return false;
}

if (document.formcontato.mensagem.value == ""){
	swal({ 
		title: "Informe sua Mensagem!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#mensagem').focus();
		}, 0);
	});
	return false;
}

	return true;
}





function ValidaContratar(){


if (document.formcontratar.nome.value == ""){
	swal({ 
		title: "Informe seu Nome!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#nome').focus();
		}, 0);
	});
	return false;
}

if (document.formcontratar.email3.value == ""){
	swal({ 
		title: "Informe seu E-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email3').focus();
		}, 0);
	});
	return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = document.formcontratar.email3.value.indexOf("@");
parte2 = document.formcontratar.email3.value.indexOf(".");
parte3 = document.formcontratar.email3.value.length;
if (!(parte1 >= 1 && parte2 >= 2 && parte3 >= 3)) {
	swal({ 
		title: "Digite corretamente seu e-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email3').focus();
		}, 0);
	});
	return false;
}

if (document.formcontratar.cidade.value == ""){
	swal({ 
		title: "Informe sua Cidade!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#cidade').focus();
		}, 0);
	});
	return false;
}

if (document.formcontratar.celular.value == ""){
	swal({ 
		title: "Informe seu Celular!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#celular').focus();
		}, 0);
	});
	return false;
}

	return true;
}









function ValidaTrackservice(){

if (document.trackservice.logintextfield.value == ""){
	swal({ 
		title: "Preencha o campo Usuário!",
		type: "warning"
	},
	function(){
		window.setTimeout(function () { 
		$('#logintextfield').focus();
		}, 0);
	});
	return false;
}


if (document.trackservice.senhatextfield.value == ""){
	swal({ 
		title: "Informe sua Senha!",
		type: "warning"
	},
	function(){
		window.setTimeout(function () { 
		$('#senhatextfield').focus();
		}, 0);
	});
	return false;
}

	return true;
}













function ValidaAreadocliente(){


if (document.formareadocliente.nomerazao.value == ""){
	swal({ 
		title: "Informe seu Nome ou Razao Social!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#nomerazao').focus();
		}, 0);
	});
	return false;
}

if (document.formareadocliente.cpfcnpj.value == ""){
	swal({ 
		title: "Informe seu CPF ou CNPJ!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#cpfcnpj').focus();
		}, 0);
	});
	return false;
}

if (document.formareadocliente.telefone.value == ""){
	swal({ 
		title: "Informe um telefone para contato!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#telefone').focus();
		}, 0);
	});
	return false;
}

if (document.formareadocliente.contatoresponsavel.value == ""){
	swal({ 
		title: "Informe o contato do Responsável!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#contatoresponsavel').focus();
		}, 0);
	});
	return false;
}

if (document.formareadocliente.email4.value == ""){
	swal({ 
		title: "Informe seu E-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email4').focus();
		}, 0);
	});
	return false;
}

//validar email(verificao de endereco eletrônico)
parte1 = document.formareadocliente.email4.value.indexOf("@");
parte2 = document.formareadocliente.email4.value.indexOf(".");
parte3 = document.formareadocliente.email4.value.length;
if (!(parte1 >= 1 && parte2 >= 2 && parte3 >= 3)) {
	swal({ 
		title: "Digite corretamente seu e-mail!",
		type: "warning" 
	},
	function(){
		window.setTimeout(function () { 
		$('#email4').focus();
		}, 0);
	});
	return false;
}

	return true;
}














