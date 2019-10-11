//Acción del botón enviar de Hexadecimal a RGB

document.getElementById("enviar").addEventListener("click",function(e){
  
    var h = document.getElementById("hex2").value; //Se asigna a h lo que recoge el campo "introduce hexadecimal"
    var valorRGB = hex(h);//Se pasa a la función hex, esa variable (h)
    if(valorRGB != "0"){ //Si la función hex devuelve algo distinto a 0
      document.getElementById("hr").value = valorRGB.substring(0,3);//Divide la cadena en 3 de dos cifras
      document.getElementById("hg").value = valorRGB.substring(3,6);
      document.getElementById("hb").value = valorRGB.substring(6,9);
    }
    else{
      document.getElementById("hr").value = "000";//Si no, devuelve 000
      document.getElementById("hg").value = "000";
      document.getElementById("hb").value = "000";
    }
  
  });