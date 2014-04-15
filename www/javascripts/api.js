function genericCall(options){

  $.support.cors = true;
  $.ajax({
   headers: {          
     Accept: "application/json; charset=utf-8",         
     "Content-Type": "application/json; charset=utf-8"
   },
   url: "http://havebacon.herokuapp.com/api/goals",
   async: false,
   type: "POST",
   data: JSON.stringify(options),
   dataType: "json",
   crossDomain: true,
   xhrFields: {
     withCredentials: true
   },
   success: function(data) {
     return data
   }
  })

}

function createGoal(options){
  var response = genericCall(options);
  return response
}

