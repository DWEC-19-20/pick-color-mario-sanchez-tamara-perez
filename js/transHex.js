//Funcion que recoge las variables rgb y junta en exadecimal

function rgb (r,g,b){

    var hex;
  
    var red=validacion(r);
    var green=validacion(g);
    var blue=validacion(b);
  
    hex = "#"+red+green+blue; //Junta las variables en una sola, añadiéndole una almoadilla al principio
  
    return hex;
  }
  
  //Función que valida los valores pasados y los transforma en hexadecimal
  
  function validacion(x){
    parseInt(x);
  
      if (x>255){
        x=255;
      }
      else if (x<0){
        x=0;
      }
    x= Number(x).toString(16).toUpperCase();
    if (x.length < 2){
      x = "0" + x;
    }
    return x;
  }
  