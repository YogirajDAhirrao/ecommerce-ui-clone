const xhr = new XMLHttpRequest();//Save a request in a variable
xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});
// .open takes two parameters one is the type of HTTP request and other is the address of backend computer(URL).
// to set up HTTP request =>
xhr.open('GET','https://supersimplebackend.dev/');// GET = get some info from the backend
// TO send the (msg) request
xhr.send();// This is asynchronous code ie it does not wait for this line of code to finish
//xhr.response;
//So, initially response will be undefined 
// In order to get response, we need to wait for the  response to comeback
// In order to wait for the response to comeback we use code at xhr.addEventListener(); 
// it takes two parameters 1. event , here since we have to wait till get response we will use load
//2 . function we need to run after loading , here console.log(xhr.response)



