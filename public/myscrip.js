
  window.addEventListener("offline", () =>{
   
    Swal.fire('You went offline!').then(function() {
      window.location.reload();
  });
  
  });
  

window.addEventListener("online",  () =>{
  Swal.fire('You are back online!').then(function() {
    window.location.reload();
});

  
});


if(navigator.onLine){
  
  function countBmi(){  

   
    var height = document.getElementById("height").value; 
    var weight = document.getElementById("weight").value;
    var msg = document.getElementById("message");
  
  
    if(height == "" || weight == ""){
  
  
      Swal.fire('Please provide your height and weight!');
      
     
    }
  
    else if( (height > 0  && height <= 999) && (weight > 0 && weight <= 999 )){
  
      
  
      var bmi = (weight/((height*height)/10000)).toFixed(2);
      var result = bmi; 
      document.getElementById("bmiValue").innerHTML = result;  
       
      if(result < 18.5){
       msg.value="Sorry, Under Weight!";
       msg.style.color="orange";   
      }
      else if(result >= 18.6 && result <=25){
         msg.value= "Hey! You are healthy";
         msg.style.color="#82E0AA  ";
         
      }
      else{
        msg.value="You are Over Weight ";
        msg.style.color="#FFA07A ";
      }
      
      
      document.getElementById("message").innerHTML =msg.value;
    }
    else{
     
      
     
      Swal.fire({
        icon: 'error',
        title: 'Invalid details',
      
      });
      
    }
    
  
    
  
  }  
  
   function giveinfo(){
  
    Swal.fire(
      'What is BMI?',
      'The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.',
      'question'
     
    )
  
  }
  
  
  
  function wishVistor(){
  
  
    var Msg = document.getElementById("wish");
   
  
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
       Msg.value ="Hi, Good Morning!";
       Msg.style.backgroundColor= "#FBFCFC";
    }
     else if (hr == 12) {
       Msg.value=" Hi, Good Noon!";
       Msg.style.backgroundColor= "#FFF176";
    }
     else if (hr >= 12 && hr <= 17) {
        Msg.value=" Hi, Good Afternoon!";
        Msg.style.backgroundColor= "#FFFF66";
        
    }
    else if(hr > 17 && hr <= 20){
      Msg.value="Hi, Good Evening!";
      Msg.style.color="";
      Msg.style.backgroundColor= "#E0F7FA";
     }
    else{
      Msg.value="Hi, it's too late. Have a nice sleep.";
      Msg.style.backgroundColor="#020632";
      Msg.style.color= "White";
    }
  
     document.getElementById("wish").innerHTML = Msg.value;
    
    
  
  }
  

}

 else{
  function wishVistor(){
  
  
    var Msg = document.getElementById("wish");
   
  
    
      Msg.value="You went Offline";
      Msg.style.backgroundColor="red";
      Msg.style.color= "White";
    
  
     document.getElementById("wish").innerHTML = Msg.value;
    
    
  
  }
  

 }