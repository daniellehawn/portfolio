var app = app || {};

app.dataMgr = (function() {
    'use strict';
    //=========================================================================


    var baseUrl = 'https://pacific-meadow-64112.herokuapp.com/data-api/';
    var collection = 'dhawn'; 

    //=========================================================================

    return {
        listItems: listItems,
        updateItem: updateItem,
        deleteItem: deleteItem
    };

    //=========================================================================

    function listItems( onSuccess, onFailure ) {
        $.ajax( baseUrl + collection,
                {
                    method: 'GET',
                    success: handleListResult,
                    error: handleAjaxError
                } );

        //---------------------------------------------------------------------

        function handleListResult( data ) {
            if ( data.error ) {
                onFailure( data.error );
            } else {
                onSuccess( data );
            }
        }

        //---------------------------------------------------------------------

        function handleAjaxError( jqXHR, textStatus, errorThrown ) {
            reportAjaxError( onFailure, jqXHR, textStatus, errorThrown );
        }
    }

    //=========================================================================



    function updateItem( id, item, onSuccess, onFailure ) {
        $.ajax( baseUrl + collection + '/' + id,
                {
                    method: 'PUT',
                    data: item,
                    success: handleUpdateResult,
                    error: handleAjaxError
                } );

        //---------------------------------------------------------------------

        function handleUpdateResult( data ) {
            if ( data.error ) {
                onFailure( data.error );
            } else {
                onSuccess( data );
            }
        }

        //---------------------------------------------------------------------

        function handleAjaxError( jqXHR, textStatus, errorThrown ) {
            reportAjaxError( onFailure, jqXHR, textStatus, errorThrown );
        }
    }

    //=========================================================================

    function deleteItem( id, onSuccess, onFailure ) {
        $.ajax( baseUrl + collection + '/' + id,
                {
                    method: 'DELETE',
                    success: handleDeleteResult,
                    error: handleAjaxError
                } );

        //---------------------------------------------------------------------

        function handleDeleteResult( data ) {
            if ( data.error ) {
                onFailure( data.error );
            } else {
                onSuccess( data );
            }
        }

        //---------------------------------------------------------------------

        function handleAjaxError( jqXHR, textStatus, errorThrown ) {
            reportAjaxError( onFailure, jqXHR, textStatus, errorThrown );
        }
    }

    //=========================================================================

    function reportAjaxError( callback, jqXHR, textStatus, errorThrown ) {
        console.error( 'AJAX error. Status:', textStatus,
                       'error:', errorThrown );
        callback( 'AJAX error <br/>' +
                  'Status: ' + textStatus + '<br/>' +
                  'Error: ' + errorThrown );
    }


    //=========================================================================
})();