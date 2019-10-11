document.getElementById("convertir").addEventListener("click",function(e){

    var r = document.getElementById("r").value; //Recoges el rgb
    var g = document.getElementById("g").value;    
    var b = document.getElementById("b").value; //Llama a la función rgb, que devuleve los valores pasados por parámetro en hexadecimal.
    
    var valorHex = rgb(r,g,b);
    document.getElementById("color").style.backgroundColor=valorHex;
    document.getElementById("hex").value = valorHex;
    
});