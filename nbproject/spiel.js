
$(document).ready(function(){
$("body").html("Körpermasse in kg:  <input id='masse' type='text' size='10'></input><br>");   
         $("body").append("Größe in cm: <input id='groesse' type='text' size='10'></input><br>");
         $("body").append("<input id='berechnen' type='button' value='Berechnen'></input>");
         
         $("#berechnen").click(function(){
            var masse=parseInt($("#masse").val()); 
            var groesse=parseInt($("#groesse").val());
           
            var bmi=parseInt(masse/((groesse/100)*(groesse/100)));
            
            $("body").append("Der BMI beträgt "+bmi+".");
            
            });
             
});