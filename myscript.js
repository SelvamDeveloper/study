var hour=document.getElementById("hour");
var minutes=document.getElementById("mins");
var seconds=document.getElementById("sec");
var am=document.getElementById("am");
var day=document.getElementById('date');
var month=document.getElementById('month');
var year=document.getElementById('year');
var tday=document.getElementById('day')
var days=["Sunday","monday","tuesday","wednesday","thursday","friday","Saturday"];
var months = ["January","February","March","February","April","May","June","July","August","September","October","November","December"];

// js code for time interval and date and time 

day.addEventListener("click", ()=>{
    
        day.textContent="today";
    
});

var clock = setInterval(
    function time(){
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let today =date.getDate();
        let mon =date.getMonth();
        let yr = date.getFullYear();
        let todays = date.getDay();


        tday.addEventListener("click", ()=>{
            tday.textContent=days[todays];
        
        });
        


// js code for Am & pm 

        if(hr<12){
            am.textContent="AM";
        }
        if(hr>12){
            am.textContent="PM";
        }

// js code for double numerical value 


        if(hr<10){
            hr= "0"+hr;
        }
        if(min<10){
            min= "0"+min;
        }
        if(sec<10){
            sec= "0"+sec;
        }

// js code for html text content result 

        hour.textContent =hr;
        minutes.textContent =min;
        seconds.textContent =sec;
        day.textContent=today;
        month.textContent=months[mon];
        year.textContent=yr;

        console.log(tday)
    },1000
);



// js code "input password status" 


let input = document.querySelector("input"),
    showHide = document.querySelector(".show-hide"),
    indicator = document.querySelector(".indicator"),
    iconText = document.querySelector(".icon-text"),
    text = document.querySelector(".text");


// js code to show and hide password 

showHide.addEventListener("click",()=>{
    if(input.type === "password"){
        input.type = "text";
        showHide.classList.replace("fa-eye-slash","fa-eye");
    }
    else{
        input.type = "password";
        showHide.classList.replace("fa-eye","fa-eye-slash");
    }
});


let alphabet = /[a-zA-Z]/,
    number = /[0-9]/,
    special = /[!,@,#,$,%,^,&,*,(,),-,_,+,=,`,]/,
    mail= "gmail.com";

    input.addEventListener("keyup", ()=>{
        indicator.classList.add("active");

        let val=input.value;
        if(val.match(alphabet) || val.match(number) || val.match(special)){
            iconText.style.color = "red";
            input.style.borderColor = "red";
            showHide.style.color= "red";
            text.textContent ="Password is week";
        }
        if(val.match(alphabet) && val.match(number) && val.length>= 6){
            iconText.style.color = "#ffd400";
            input.style.borderColor = "#ffd400";
            showHide.style.color= "#ffd400";
            text.textContent ="Password is medium";
        }
        if(val.match(alphabet) && val.match(number) && val.match(special)  && val.length>= 8){
            iconText.style.color = "#04ff00";
            input.style.borderColor = "#04ff00";
            showHide.style.color= "#04ff00";
            text.textContent ="Password is strong";
        }



        if(val== ""){
            iconText.style.color = "#252525";
            input.style.borderColor = "#252525";
            showHide.style.color= "#252525";
            indicator.classList.remove("active");
        }

    });