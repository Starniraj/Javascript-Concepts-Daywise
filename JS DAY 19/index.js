//Jquery  = Its a JS Library which provides effective method for doing something in frontend and gives eesential feature
//like DOM manipulation , AJAX interaction and so on ....

// $("button").click(function(){
//     // $("p").hide();
//     $("#learn").toggle();

// })


// API - Application Programing Interface.

// It connects two application to pass data from one to another....

// AJAX - It helps us to query the API's . It allows us to make the server calls 
//and display the data without reloading the pages. It allows us to communicate with remote web servers in an asynchronus way with help of
//AJAX calls, we can request data from web servers dynamically. It helps us to create CRUD applications.

$ ("button").click(function(){
    $.ajax({
     url : "https://jsonplaceholder.typicode.com/todos/1",
     type: "GET",
     success : function(response){
         console.log(response);
     document.getElementById("learn").innerText = response.title;        
     }
    })
})