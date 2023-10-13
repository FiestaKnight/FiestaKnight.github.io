"use strict";

//much of this text was taken from the countdown assignment with slight tweaks.

//Replacing stuff with Regex

const isDate = (date, datePattern, type) => {
    if (!datePattern.test(date)) { return false; }

    if (type == "full") {
        const dateParts = date.split("/");
        const month = parseInt( dateParts[0] );
        const day = parseInt( dateParts[1] );

        if ( month < 1 || month > 12 ) { return false; }
        if ( day > 31 ) { return false; }
        return true;
    }
};

$( document ).ready( () => { 

    $("#countdown").click( () => {
        $("span").text("");

        const name = $("#name").val();
        const eventDate = $("#date").val();  
        const messageLbl = $("#message");  
        
        //Regex stuff
        const namePattern = /^[A-Za-z]*$/;
        const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;

        // check user entries for validity
        let isValid = true;
        if ( name === "" || !namePattern.test(name) ) {
            isValid = false;
            messageLbl.text( "Please enter both a name and a date." );
            return;
        }

        if ( eventDate === "" || !isDate(eventDate, datePattern, "full") ) {
            isValid = false;
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // make sure user name and date 
        //if (name.length == 0 || eventDate.length == 0) {
            //messageLbl.text( "Please enter both a name and a date." );
            //return;
        //}  
      
        // make sure event date string has two slashes 
        //const dateParts = eventDate.split("/");
        //if (dateParts.length != 3) {   
            //messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            //return;
        //} 
        // make sure event date string has a 4-digit year
        //const year = eventDate.substring(eventDate.length - 4); 
        //if (isNaN(year)) {
            //messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            //return;
        //}     
        // convert event date string to Date object and check for validity

        let date = new Date(eventDate);
        if (date == "Invalid Date") {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = name.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message, these messages have been slightly altered to better represent Rox's availability.
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Sorry ${formattedName} I'm busy today please try a different date!`;
        }
        else if (daysToDate > 0) {
            msg = `${formattedName} your appointment has been set for ${daysToDate} day(s) from today!`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} I can't really go ${daysToDate} day(s) in the past on a whim.`;
        }
        messageLbl.text(msg);
    });
    
    $("#event").focus();
});