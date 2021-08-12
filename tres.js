/*ugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

function mostrar() {
  let tipoDeJuguete;
  let origen;
  let precio;
  let seguir;
  //a
  let tipoJugueteMasVendido;
  let contadorRompe=0;
  let contadorMunieca=0;
  let contadorPelota=0;
  //b
  let contadorImportados=0;
  let acumuladorPrecioImportados=0;
  let promedioPrecioImportados=0;
  //C
  let acumulacionTotal;
  let flagTotal=1;
  //E
  let ivaPagado;
  do{
    tipoDeJuguete=prompt("ingrese tipo: muñeca/ rompecabezas/ pelota");
   if(tipoDeJuguete== "muñeca"){
     contadorMunieca ++ ;
   }
   else if(tipoDeJuguete== "rompecabezas"){
     contadorRompe ++ ;
   }
   else { contadorPelota ++}
   if(contadorPelota>contadorMuñeca && ContadorPelota > contadorRompe){
     tipoJugueteMasVendido= "Pelota";
   }
   else if(contadorMunieca >= contadorPelota && contadorMUnieca > contadorRompe){
     tipoJugueteMasVendido= "muñeca";
   }
   else {
     tipoJugueteMasVendido= "Rompecabezas";
   }

    origen= prompt("Ingrese orrigen: nacional/extranjero");
    if(origen=="extranjero"){
      contadorImportados ++ ;
      acumuladorPrecioImportados =+ precio ;
    }
    precio= pareIntprompt("Ingrerse precio");
    while(precio< 1000 || precio > 5000){
      precio= parseInt(prompt("ingrese precio válido: "));
    }
    if(flagTotal){
      acumulacionTotal =+ precio
    }
seguir=prompt("desea ingresar otra venta? si/no");
  }while(seguir=="si");
//A
document.write("el tipo de juguete más vendido es" + tipoJugueteMasVendido + "<br>");
//B
if(contadorImportados!=0){
  promedioPrecioImportados= acumuladorPrecioImportados / contadorImportados;
}
document.write("el precio promedio de los importados es" + promedioPrecioImportados + "<br>");
//C
document.write("la recaudación total es de" + acumulacionTotal + "<br>");
//E
ivaPagado= acumulacionTotal * 21 / 100
document.write("el IVA pagado es" + ivaPagado + "<br>");
}
