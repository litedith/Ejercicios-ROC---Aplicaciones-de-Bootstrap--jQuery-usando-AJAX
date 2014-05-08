var API_BASE_URL = "https://api.github.com";
var USERNAME = "litedith";
var PASSWORD = "litedith1";
$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});


$("#button_create_gist").click(function(e) {
	e.preventDefault();
	
	 var newGist = {
	 "description": $("#description_to_create").val(),
		"public": true,
		"files": {
		"Nwdfnlsadngklgalsgn": {  
      "content": $("#gist_name_to_create").val()
			}
	
		}
	 }
	 

//if($("#username").val()=="" || $("#password").val()=="" ){//Condición si el campo Username o Password estan vacios
	//	$("#repos_result").text("Campo vacío.");
		//$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena todos los Campos para autenticarte </div>').appendTo($("#create_result"));
		
	
		if($("#description_to_create").val()=="" ){//Condición si el campo Description está vacio
		//$("#create_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de descripción </div>').appendTo($("#create_result"));
		
	}
			if($("#gist_name_to_create").val()=="" ){//Condición si el campo Content está vacio
		//$("#create_result").text("Campo vacío.");
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Rellena el campo de contenido del Gist </div>').appendTo($("#create_result"));
		
	}
	else{
		createGist(newGist);
	}
	
});



function createGist(newGist) {
	var url = API_BASE_URL + '/gists';
	var data = JSON.stringify(newGist);

	$("#create_result").text('');

	$.ajax({
		url : url,
		type : 'POST',
		crossDomain : true,
		dataType : 'json',
		data : data,
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Created</div>').appendTo($("#create_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#create_result"));
	});

}

