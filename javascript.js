         function calculer() 
         { 
             let a = document.getElementById("output").value 
             let b = eval(a) 
             if(!b){
                 document.getElementById("output").value ="";
             }
             else{
                 document.getElementById("output").value = b;
             }
              
         } 
         
         function afficher(valeur) 
         { 
             document.getElementById("output").value+=valeur
         } 
         
         function effacer() 
         { 
             document.getElementById("output").value = "" 
         } 