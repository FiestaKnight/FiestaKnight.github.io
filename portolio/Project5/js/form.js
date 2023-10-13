"use strict";

//const $ = selector => document.querySelector(selector);

//document.addEventListener("DOMContentLoaded", () => {

$(document).ready( () => {
    $("#register").click( evt => {

    //const firstName = $("#first_name");
    //const lastName = $("#last_name");
    //const world = $("#world");
    //const terms = $("#terms");
    //const requests = $("#requests");

    let isValid = true;

    //Regex info
    const firstNamePattern = /^[A-Za-z]*$/;
    const firstName = $("#first_name").val().trim();
            if (firstName == "") {
              $("#first_name").next().text("This field is required.");
               isValid = false;
            } else if ( !firstNamePattern.test(firstName) ) {
                $("#first_name").next().text("Must be a valid First Name.")
                isValid = false;
            } else {
               $("#first_name").next().text("");
             }
             $("#first_name").val(firstName);

    const lastNamePattern = /^[A-Za-z]*$/;
    const lastName = $("#last_name").val().trim();
            if (lastName == "") {
              $("#last_name").next().text("This field is required.");
               isValid = false;
            } else if ( !lastNamePattern.test(lastName) ) {
                $("#last_name").next().text("Must be a valid Last Name.")
                isValid = false;
            }else {
               $("#last_name").next().text("");
             }
             $("#last_name").val(lastName);

    const requests = $("#requests").val().trim();
            if (requests == "") {
            $("#requests").next().text("This field is required.");
               isValid = false;
           } else {
                $("#requests").next().text("");
           }
           $("#requests").val(requests);

    //if (firstName.value == "") {
        //firstName.nextElementSibling.textContent = "Please enter your first name.";
        //isValid = false;
    //} 
    //else {
        //firstName.nextElementSibling.textContent = "";
    //}

    //if (lastName.value == "") {
        //lastName.nextElementSibling.textContent = "Please enter your last name."; 
        //isValid = false;
    //}
    //else {
        //lastName.nextElementSibling.textContent = "";
    //} 

    //if (world.value == "") {
        //world.nextElementSibling.textContent = "Please select a world.";
        //isValid = false;
    //} 
    //else{
        //world.nextElementSibling.textContent = "";
    //}

    //if (terms.checked == false) {
        //terms.nextElementSibling.textContent = "You must agree to the terms of service."; 
        //isValid = false;
    //}
    //else {
        //terms.nextElementSibling.textContent = "";
    //}

    //if (requests.value == "") {
        //requests.nextElementSibling.textContent = "Please enter a request.";
        //isValid = false;
    //}
    //else {
        //requests.nextElementSibling.textContent = "";
    //}

    if (isValid == true) {
        $("form").submit(); 
    }
});

    $("#reset_form").click( () => {

       // $("form").reset();

        $("#first_name").value = "";
        $("#last_name").value = "";
    //    $("#world").value = "";
    //    $("terms").value = false;
        $("#requests").value = "";

    $("#first_name").focus();
});

    $("#first_name").focus();   
});

