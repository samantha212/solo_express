/**
 * Created by samanthamusselman on 1/6/16.
 */

$(document).ready(function(){

    $('.get').on('click', function(event){
        event.preventDefault();
        console.log("Yupper do!");
        addInfo();
    })
});

function addInfo(){
    $.ajax('/balance').then(function(response){
        $('.balance').html(response);
    });
};