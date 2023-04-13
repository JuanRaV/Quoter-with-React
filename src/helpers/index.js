//Es un archivo de funciones
const formatearDinero = (valor)=>{
    //Le pasamos un string y lo convertira en dolares
    const formatter = new Intl.NumberFormat('en-US',{ //API de internacionalizacion en JS
        style:'currency',
        currency: "USD"
    }) 

    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad,plazo)=>{
    let total;
    //Mientras mayor es la cantidad solicitada menor es el interes
    if(cantidad<5000){
        total = cantidad*1.5;
    }else if(cantidad>=500 && cantidad<10000){
        total = cantidad*1.4;
    }else if(cantidad>=10000 && cantidad<15000){
        total = cantidad*1.3;
    }else{
        total = cantidad*1.2;
    }

    //Plazo: Mas plaxo, mayor interes
    if(plazo === 6){
        total*=1.1;
    }else if(plazo===12){
        total*=1.2;
    }else{
        total*=1.3;
    }
    return total;
}

export {formatearDinero,calcularTotalPagar}