/*De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/ 
function mostrar() {
  alert("Ejercicio 1");
}
let nombre;
let tipo;
let sangre;
let edad;
let sexo;
let seguir;
//punto a
let contadorReptil=0;
let acumuladorEdadReptil=0;
let promedioEdadReptil=0;
//punto b
let tipoMascotaMasJoven;
let sexoMascotaMasJoven;
let flagEdad=1;
let edadMenor;
//punto c 
let contadorTotalMascotas=0;
let contadorAve=0;
let porcentajeAve=0;
// punto d
let contadorMamifero= 0;
let mascotaMasCantidad;



do {

nombre= prompt("ingrese nombre: ");
while (nombre.lenght < 3 || nombre.lenght > 8 ) {
nombre= prompt( "Error, ingrese nombre entre 3 y ocho caracteres: ")}

tipo= prompt("ingrese el tipo: mamifero/ ave / reptil");
while (!(tipo == "mamifero" || tipo == "ave" || tipo== "reptil")){
tipo= prompt("ingrese un tipo valido: ")} 
if (tipo=="reptil") {
sangre= "fria"
contadorReptil++
acumuladorEdadReptil += edad}
else {

sangre= prompt("ingrese sangre: fría/calida ");
while (!(sangre== "fría" || sangre == "calida")) {
sangre=prompt("ingrese un valor valido: ");
}
}

sexo= prompt("ingrese sexo: m/h");
while( !(sexo== "m" || sexo== "h")) {
sexo= prompt("ingrese un valor válido: ")}

edad= parseInt(prompt("ingrese la edad: "));
while( isNaN(edad) || edad<=0) {
edad= parseInt(prompt("ingrese una edad valida: ");
}
seguir= prompt("Desea seguir ingresando?: ");

if (flagEdad || edad< edadMenor){ 
edadMenor= edad;
tipoMascotaMasJoven= tipo;
sexoMascotaMasJoven= sexo;
flagEdad=0
} 
if (tipo == "ave"){
  contadorAve ++ 
}
else if(tipo== "reptil"){
  contadorReptil ++
}
else {
  contadorMamifero ++
}

if(contadorMamifero > contadorReptil && contadorMamifero > contadorAve){
mascotaMasCantidad = "mamifero";
}
else if (contadorReptil >= contadorMamifero && contadorReptil > contadorAve){
  mascotaMasCantidad= "reptil";
}
else {
  mascotaMasCantidad = "ave";
}
contadorTotalMascotas ++ 
seguir=prompt("Desea ingresar otra mascota? si/no ");
while(seguir!="si" || seguir!= "no") {
  seguir=prompt("ingrese si/no");
}
}while( seguir== "si");
//a
if (contadorReptil != 0){
promedioEdadReptil= acumuladorEdadReptil / contadorReptil}
document,write("a-El promedio de edad de los reptiles es" + promedioEdadReptil + "<br>");
//b
document.write ("b-la mascota más joven ingresada es del tipo" + tipoMascotaMasJoven + "y su sexo es" + sexoMascotaMasJoven + "<br>");

//C
if(contadorAve !=0){ 
porcentajeAve= contadorAve * 100 / contadorTotalMascotas;
}

document.write("c-El porcentaje de aves ingresadas es" + porcentajeAves + "<br>");

//d
document.write("El tipo de mascota más ingresado es" + mascotaMasCantidad + "<br>");