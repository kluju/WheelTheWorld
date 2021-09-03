
const totalMaxOrMin = (testArray:number[], fastest: boolean = true) =>{

    if(fastest){
      return Math.max.apply(null, testArray); 
    }else{
      return Math.min.apply(null, testArray); 
    }
  
  }
  //FUNCION QUE RECIBE LOS 2 LISADOS DE CICLISTAS
  const emeparejar = (redShirtSpeeds:number[],blueShirtSpeeds:number[]):number => {
    //VARIABLE QUE SUMA LA VELOCIDAD MAXIMA 
    let velocidadTotal:number = 0;
    //WHILE QUE PERMITE LEER EL ARREGLO DE CICLISTAS ROJOS HASTA QUEDAR EN 0
    while(redShirtSpeeds.length > 0){
      //OBTENGO EL TOTALMAXIMO PARA LOS CICLISTA ROJOS
      
      let maxRojo:number = parseInt(totalMaxOrMin(redShirtSpeeds));
      //OBTENGO EL TOTALMINIMO PARA LOS CICLISTA AZULES
      let minAzul:number  = totalMaxOrMin(blueShirtSpeeds,false);
      //SUMO LA VELOCIDAD TOTAL DEPENDIENDO SI ROJO MAYOR A AZUL SUMO ROJO DE LO CONTRARIO AZUL
      velocidadTotal += (maxRojo > minAzul) ? maxRojo :  minAzul;
      //ELIMINO DE LOS CICLISTAS ROJOS Y AZUL EL CICLISTA UTILIZADO
      redShirtSpeeds.splice( redShirtSpeeds.indexOf( maxRojo ), 1 );
      blueShirtSpeeds.splice( blueShirtSpeeds.indexOf( minAzul ), 1 );
      //console.log([maxRojo,minAzul]);
      //console.log((maxRojo > minAzul) ? maxRojo :  minAzul);
      //console.log(velocidadTotal);
    }
    return velocidadTotal;
  }
  
  
  const cuantasMonedas = (denoms:number[], N:number) => {
    let cantMonedas:number = denoms.length - 1;
    let total:number = N; // copio el valor objetivo
    let count:number = 0;  // la salida
    
    while (total > 0) {
      if (denoms[cantMonedas] > total) {
        cantMonedas--;
      } else {
        total = total - denoms[cantMonedas];
        count++;
      }
    }
    
    return  (cantMonedas >= 0) ? count : cantMonedas;
  }
console.log("ejercicio 1");
console.log(emeparejar([5, 5, 3, 9, 2],[3, 6, 7, 2, 1]))


document.write("ejercicio 1"+ "<br/>");
document.write(emeparejar([5, 5, 3, 9, 2],[3, 6, 7, 2, 1]).toString()+ "<br/>");



console.log("ejercicio 2");
console.log(cuantasMonedas([1, 5, 10],7))


document.write("ejercicio 2"+ "<br/>");
document.write(cuantasMonedas([1, 5, 10],7).toString());
