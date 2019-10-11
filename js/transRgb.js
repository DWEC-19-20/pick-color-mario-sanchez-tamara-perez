/* Función que al pasar un valor RGB en representación hexadecimal
	devuelve la representación en formato decimal con el formato RRRGGGBB
*/

function hex(h) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);//Utilizamos aquí el patter porque en html no funciona
	var rgb; //Se declara la variable que contendrá la conversión
	if(result != null){ //Si pasa el patter, hace esto:
		var r=parseInt(result[1], 16); //Obtiene el primer valor del array result y lo convierte a decimal
		var g=parseInt(result[2], 16);
		var b=parseInt(result[3], 16);
		r=("000" + r).slice(-3); //Añade 000, y corta de derecha a izq. para que tenga 3 dígitos. Lo pide el test.
		g=("000" + g).slice(-3);
		b=("000" + b).slice(-3);
		rgb = r+g+b; //Asigna a rgb la concatenación de la conversión. (obligatorio por el test)
	}
	return result ? rgb : "0"; //Devuelve el rgb (la concatenación) o 0 si no pasa el pattern.
}