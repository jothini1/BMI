
$(document).ready(function(){
$("body").html("K�rpermasse in kg:  <input id='masse' type='text' size='10'></input><br>");   
         $("body").append("Gr��e in m: <input id='groesse' type='text' size='10'></input><br>");
         $("body").append("<input id='berechnen' type='button' value='Berechnen'></input>");
         
         $("#berechnen").click(function(){
            var masse=parseInt($("#masse").val()); 
            var groesse=parseDouble($("#groesse").val());
           
            var bmi=masse/(groesse*groesse);
            
            $("body").append("Der BMI betr�gt "+bmi+".");
            
            });
             
});