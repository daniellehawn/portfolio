/*
  RestDBApp.js
  App that uses Local Storage to manage a simple database
*/

(function() {
'use strict';
//=============================================================================



$(document).ready(displayContact);

//=============================================================================

function displayContact( ) {
    var i, len, person;
    var tr;

    app.dataMgr.listItems( displayContactTable, displayError );

    //-------------------------------------------------------------------------

    function displayContactTable( people ) {
        $('#contacts').empty();

        for ( i = 0, len = people.length; i < len; ++i ) {
            tr = makeTableRow( people[ i ] );
            $('#contacts').append( tr );
        }
    }

    //-------------------------------------------------------------------------

    function makeTableRow( person ) {
        var tr, td, button;

        tr = $( '<tr>' );

        td = $( '<td>' );
        td.text( person.name );
        tr.append( td );

        td = $( '<td>' );
        td.text( person.email );
        tr.append( td );
      
        td = $( '<td>' );
        td.text( person.comment );
        tr.append( td );

        td = $( '<td>' );
        td.text( person.status );
        tr.append( td );

        td = $( '<td>' );
        button = $( '<button type="button">' );
        button.text( 'Edit' );
        button.addClass(' btn btn-contact');
        td.append( button );
        button.on( 'click', showEditForm );
        button = $( '<button type="button">' );
        button.text( 'Delete' );
        button.addClass(' btn btn-contact');
        td.append( button );
        tr.append( td );
        button.on( 'click', confirmAndDelete );
      
        $('#modify-record').hide()

        return tr;

        //---------------------------------------------------------------------

        function showEditForm( ) {
            $('#name').val( person.name );
            $('#email').val( person.email );
            $('#comment').val( person.comment );
            $('#status').val( person.status );

            $('#submit').one( 'click', updatePerson );
            $('#cancel').one( 'click', displayContact );

            $('#modify-record').show();

            //-----------------------------------------------------------------

            function updatePerson( evt ) {
                var editedPerson = {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    comment: $('#comment').val(),
                    status: $('#status option:selected').val()
                };

                evt.preventDefault( );
                clearError( );

                app.dataMgr.updateItem( person._id, editedPerson,
                                        displayContact, displayError );
            }
        }

        //---------------------------------------------------------------------

        function confirmAndDelete( evt ) {
            evt.preventDefault( );
            clearError( );

            if ( window.confirm( 'Are you sure you want to delete "' +
                                 person.name + '"?' ) ) {
                app.dataMgr.deleteItem( person._id, displayContact, displayError );
            }
        }
    }
}

//=============================================================================

function displayError( errorMsg ) {
    $('#error-message').html( errorMsg );
}

//-----------------------------------------------------------------------------

function clearError( ) {
    $('#error-message').html( '' );
}

function hideEditForm ( ){
  
//  $('#modify-record').hide();
}

//=============================================================================
})();
