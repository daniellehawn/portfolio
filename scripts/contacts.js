var BASE_URL = "https://pacific-meadow-64112.herokuapp.com/data-api/";
var collection = "dhawn";

$('#submit').on('click', handleContactForm );

function handleContactForm( evt ) {
  evt.preventDefault();
  var name = $('#nameInput').val();
  var email = $('#emailInput').val();
  var comment = $('#commentsInput').val();
  var inquiry = {
    name: name, 
    email: email, 
    comment: comment
  };
  
  createInquiry( inquiry );
}

function createInquiry( inquiry ){
  clearResponse( );
  $.ajax( BASE_URL + collection,
         {
        method: 'POST',
        data: inquiry,
        success: reportResponse,
        error: reportAjaxError 
  });
}

function handleReadList( evt ){
  getContactList( );
}

function getContactList( ){
  clearResponse( );
  $.ajax( Base_URL + collection,
        {
    method: 'GET',
    success: reportResponse,
    error: reportAjaxError,
  });
}

function reportResponse( response ){
  $("input").val(" ");
  $("textarea").val(" ");
  alert('Your inquiry has been successfully saved. We will respond within 400 business days!');
}

function reportAjaxError( jqXHR, textStatus, errorThrown){
  alert( 'An AJAX error occured!' );
}

function clearResponse( ){
  $('#response').empty( );
}