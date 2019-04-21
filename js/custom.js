//.eslintrc
//alert("oi mundo");
function troca1(tipo){
    //document.getElementById("demorado").checked=true;
    if (tipo=="barato"){
        document.getElementById("malfeito").checked=false;
    }
    else if (tipo=="rapido"){
        document.getElementById("caro").checked=false;
        document.getElementById("pago").checked=false;
    }
    else if (tipo=="bemfeito"){
        document.getElementById("demorado").checked=false;
    }
    else if (tipo=="gratis"){
        document.getElementById("demorado").checked=false;
        document.getElementById("caro").checked=true;
        document.getElementById("malfeito").checked=false;
    }

}