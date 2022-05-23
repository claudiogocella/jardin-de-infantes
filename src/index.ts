//... funcionalidadde ingresode datos...
rotulo.innerHTML = "Ingresela cantidadde infantes del curso: ";
let cantidadAulas: number= 3;
let coloresAulas: string[]= new Array(cantidadAulas);
let capacidadAulas: number[]= new Array(cantidadAulas);
let cantidadAlumnos: number= Number(dato.value);
coloresAulas[0] = "Azul"; 
coloresAulas[1] = "Verde"; 
coloresAulas[2] = "Amarilla"; 
capacidadAulas[0] = 40; 
capacidadAulas[1] = 35; 
capacidadAulas[2] = 30; 
console.log("La mejoraula es: ",obtenerMejorAula( coloresAulas, capacidadAulas,   cantidadAulas, cantidadAlumnos));

functionobtenerMejorAula(nombresAulas:string[], asientosAulas:number[], largo:number, cantidadInfantes:number):number {
    let indice:number;
    let indiceMejorAula:number= 0;
    for (indice=0; indice<largo;indice++){
        if ((asientosAulas[indice] >= cantidadInfantes)&& (asientosAulas[indice] < asientosAulas[indiceMejorAula]){
indiceMejorAula= indice;
        }
      }
returncoloresAulas[indiceMejorAula];
}
