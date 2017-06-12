var BASE_URL = "https://pacific-meadow-64112.herokuapp.com/data-api/";
var collection = "dhawn";

$('#delete-submit').on( 'click', handleDeleteForm);
$(document).ready(handleReadList);
                  
                  
                  
function handleReadList( ){
  getContactList( );
}

function getContactList( ){
    clearResponse( );
  $.ajax( BASE_URL + collection,
        {
    method: 'GET',
    success: reportResponse,
    error: reportAjaxError,
  });
}

function handleDeleteForm( evt ){
  evt.preventDefault();
  var id = $('#delete-id').val();
  deletePerson( id );
}

function deletePerson( id ){
    clearResponse( );
  $.ajax( BASE_URL + collection + '/' + id,
        {
    method: 'DELETE',
    success: reportResponse,
    error: reportAjaxError,
  });
}

function reportResponse( response ){
  $('#response').text( JSON.stringify( response, null, 4 ) );
}

function reportAjaxError( jqXHR, textStatus, errorThrown){
  $('#response').text( 'An AJAX error occured!' );
}

function clearResponse( ){
  $('#response').empty( );
}