var USERNAME = "litedith";
var PASSWORD = "litedith1";
$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});

$("#button_edit_gist").click(function(e) {
	e.preventDefault();

    var newGist = new Object();
	var idg = $("#id_gist").val();
	newGist.filename = $("#gist_name_to_create").val()
	newGist.description = $("#description_to_create").val()
	
	updateGist(newGist, idg);
});

function updateGist(newGist, idg) {
	
	var url = 'https://api.github.com/gists/' + idg;

	var data = JSON.stringify(newGist);

	$("#update_result").text('');

	$.ajax({
		url : url,
		type : 'PATCH',
		crossDomain : true,
		dataType : 'json',
		data : data,
		statusCode: {
    		404: function() {$('<div class="alert alert-danger"> <strong>Oh!</strong> Page not found </div>').appendTo($("#update_result"));}
    	}
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Gist Updated</div>').appendTo($("#create_result"));				
  	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#create_result"));
	});

}