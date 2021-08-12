/*nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/ 
function mostrar() {
   
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let promedioDelAlumno;
  let edad;
  //a
  let flagFisica;
  let mejorPromedioFisica;
  let nombreMejorPromedioFisica;
  //b
  let edadAlumnaMasJoven;
  let nombreAlumnaMasJoven;
  let flagMujer;
  //c
let contadorFisica=0;
let contadorQuimica=0;
let contadorSistemas=0;
let porcentajeEstudiantesFisica=0;
let porcentajeEstudiantesQuimica=0;
let porcentajeEstudiantesSistemas=0;
//d
let nombreEstudianteMasMaterias;
let edadEstudianteMasMaterias;
let flagCantMaterias= 1;
let masMaterias;
  
  for (let i= 0 ; i<500 ; i ++) {
    nombre= prompt("ingrese nombre: ");

    carrera= prompt("Ingrese carrera: quimica, fisica, sistemas ");
    while (carrera !="quimica" || carrera != "fisica" || carrera != "sistemas"){
      carrera= prompt("Reingrese carrera");
    }
    sexo= prompt("ingrese sexo: masculino, femenino, no binario ");
    while (sexo != "masculino" || sexo != "femenino" || sexo != "no binario"){
      sexo= prompt("Reingrese sexo: ");
    }
      
      cantidadMaterias= prompt("Ingrese cantidad de materias: ");
while (isNaN(cantidadMaterias)|| (cantidadMaterias <1 || cantidadMaterias > 5)){
  cantidadMaterias= prompt("Ingrese un número válido: ");
    }

promedioDelAlumno= prompt("ingrese promedio:" );
while( promedioDelAlumno < 0 || promedioDelAlumno> 10) {
  promedioDelAlumno= prompt("Ingrese un número válido: ");

}
edad=prompt("ingrese edad: ");
while(isNaN(edad)){
  edad=prompt("Ingrese un número: ");
}
if(carrera=="fisica" && (flagFisica || promedio>mejorPromedioFisica)){
  mejorPormedioFisica= promedio;
  nombreMejorPromedioFisica= nombre;
  flagFisica= 0;}
  
if( sexo== "femenino" && (flagMujer || edad< edadMujerMasJoven)){
  edadAlumnaMasJoven= edad;
  nombreAlumnaMasJoven= nombre;
  flagMujer= 0
}
if (carrera== "fisica"){
  contadorFisica++
}
else if (carrera== "quimica"){
  contadorQuimica++
}
else {contadorSistemas ++}
if( carrera != "quimica" && (flagCantMaterias || cantidadMaterias> masMaterias)){
  masMaterias= cantidadMaterias;
  nombreEstudianteMasMaterias= nombre;
  edadEstudianteMasMaterias= edad;
  flagCantMaterias=0;
}
}
//A
document.write("el nombre del mejor promedio de fisica es" + nombreMejorPromedioFisica + "con un promedio de"+ mejorPromedioFisica + "<br>");
//B
document.write("el nombre de la mujer más jóven es" + nombreMujerMasJoven + "y su edad es" + edadMujerMasJoven + "<br>");
//C
if(contadorFisica !=0){
  porcentajeEstudiantesFisica= contadorFisica * 0.2;
}
if(contadorQuimica !=0){
  porcentajeEstudiantesQuimica= contadorQuimica * 0.2;
}
if (contadorSistemas !=0){
  porcentajeEstudiantesSistemas= contadorSistemas+ 0.2;
}
document.write("El porcentaje de alumnos de fisica es" + porcentajeEstudiantesFisica + "<br>" + 
"el de quimicaes de" + porcentajeEstudiantesQuimica + "<br>" + 
"y el de sistemas es de" +  porcentajeEstudiantesSistemas + "<br>" );
//D
document.write (" el alumno que cursa más materias salvando Quimica es" + nombreEstudianteMasMaterias + "y su edad es" + edadEstudianteMasMaterias + "<br>" );
}


  

