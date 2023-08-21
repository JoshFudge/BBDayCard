"use strict"

$(document).ready( () => {

$("#ClosedCard").click( () => {
    $("#ClosedCard").toggleClass("hidden");
    $("#openedCard").toggleClass("hidden")
})

$("#openedCard").click( () => {
    $("#ClosedCard").toggleClass("hidden");
    $("#openedCard").toggleClass("hidden")
})

})