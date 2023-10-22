function crearVal(contenedorId, min, cantidadVal){
    let etiquetaContenedor = document.getElementById(contenedorId);
    for(let conteoVal=1; conteoVal <= cantidadVal; conteoVal++){
        let textoEtiqueta = "Valoración " + conteoVal;
        let parrafoVal = crearEtiquetaVal(textoEtiqueta,min);
        etiquetaContenedor.appendChild(parrafoVal);
    }
}

function crearEtiquetaVal(identificadorInput, valorMin, valorMax){
    let etiquetaParrafo = document.createElement("p");
    let etiquetaLabel = document.createElement("label");
    etiquetaLabel.innerText = identificadorInput + ": ";
    let etiquetaInput = document.createElement("input");
    etiquetaLabel.setAttribute("for", identificadorInput);
    etiquetaInput.setAttribute("type", "number");
    etiquetaInput.setAttribute("id", identificadorInput);
    etiquetaInput.setAttribute("min", valorMin);
    etiquetaInput.setAttribute("max", valorMax);
    etiquetaInput.setAttribute("oninput", "verificarValor(this)");
    etiquetaInput.setAttribute("value", 0);
    etiquetaParrafo.appendChild(etiquetaLabel);
    etiquetaParrafo.appendChild(etiquetaInput);
    return etiquetaParrafo;
}

function verificarValor(input){
    if(input.value > 50){
        input.value = 50;
        alert("Recuerda que la máxima valoración es 50");
    }
}

function promedio(){
    let valoraciones = [];
    let posicionVal = 0;
    let elementosVal = document.getElementById("itemsVal");

    for(let item of elementosVal.children){
        let valorVal = +item.children[1].value;
        valoraciones[posicionVal] = valorVal;
        posicionVal = posicionVal + 1;
    }

    let totalVal = sumarTotal(valoraciones);

    let promedio = Math.round(totalVal / valoraciones.length);
    let mensajeSalida = promedio; 
    document.getElementById("promedioVal").textContent = mensajeSalida;

    let valoracionMayor = valoracionAlta(valoraciones);
    let aplazo = aplazarSemestre(valoraciones);
}

function sumarTotal(arrayValoraciones){
        let total = 0;
        
    for(let valoraciones of arrayValoraciones){
            total += valoraciones;
                }
        return total;
}    

function valoracionAlta(arrayValoraciones){
        let maximo = arrayValoraciones[0];

    for(let valoracionMayor of arrayValoraciones){
        if(valoracionMayor > maximo){
            maximo = valoracionMayor;
        } 
    }
    let mensajeMax = maximo; 
    document.getElementById("notaAlta").textContent = mensajeMax;
   
    return maximo;
}

function aplazarSemestre(arrayValoraciones){
    let aplazo = "No";
    let i = 0;
    do{
        if(arrayValoraciones[i] < 30){
            aplazo = "Sí";
            break;
        }
        i++;
    }while(i < arrayValoraciones.length);

let mensajeAplazo = aplazo; 
document.getElementById("aplazo").textContent = mensajeAplazo;
}
