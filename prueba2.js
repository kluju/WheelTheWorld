
const totalMaxOrMin = (testArray, fastest = true) =>{

  if(fastest){
    return Math.max.apply(null, testArray); 
  }else{
    return Math.min.apply(null, testArray); 
  }

}
//FUNCION QUE RECIBE LOS 2 LISADOS DE CICLISTAS
const emeparejar = (redShirtSpeeds,blueShirtSpeeds) => {
  //VARIABLE QUE SUMA LA VELOCIDAD MAXIMA 
  let velocidadTotal = 0;
  //WHILE QUE PERMITE LEER EL ARREGLO DE CICLISTAS ROJOS HASTA QUEDAR EN 0
  while(redShirtSpeeds.length > 0){
    //OBTENGO EL TOTALMAXIMO PARA LOS CICLISTA ROJOS
    let maxRojo = parseInt(totalMaxOrMin(redShirtSpeeds));
    //OBTENGO EL TOTALMINIMO PARA LOS CICLISTA AZULES
    let minAzul = totalMaxOrMin(blueShirtSpeeds,false);
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


const menorCantidadMonedas = (denoms ,n) =>{

  let monorCantidad = totalMaxOrMin(denoms);
  denoms.map( ( denoms ) => {
    if (denoms > n){
      monorCantidad = ( (denoms - n) < monorCantidad) ? (denoms - n) :  monorCantidad;
    }
  })
  return monorCantidad > 0  ? monorCantidad : -1;
}


//console.log(emeparejar([5, 5, 3, 9, 2],[3, 6, 7, 2, 1]))

console.log(menorCantidadMonedas([5,3,1],7))