const botonEncriptar = document.querySelector(".boton-encriptar");
const textoencriptar =document.querySelector(".encriptar");
const aviso = document.querySelector(".instruccion");
const rta=document.querySelector(".evaluar");
const contenido = document.querySelector(".no-encontrado");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar =document.querySelector(".boton-desencriptar");

botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= textoencriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );

    if(texto == ""){
        aviso.textContent = "EL CAMPO DE TEXTO SE DEBE LLENAR";
    }
    else if(texto!== txt){
        aviso.textContent = "NO DEBE TENER ACENTOS NI CARACTERES ESPECIALES"; 
    }
    else if(texto!==texto.toLowerCase()){
        aviso.textContent="EL TEXTO DEBE SER EN MINÚSCULA";
    }

    else{
        texto= texto.replace(/e/mg,"enter");
        texto= texto.replace(/i/mg,"imes");
        texto= texto.replace(/a/mg,"ai");
        texto= texto.replace(/o/mg,"ober");
        texto= texto.replace(/u/mg,"ufat");
    
    
        rta.innerHTML = texto;
        contenido.remove();
    }

});

botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto= textoencriptar.value;
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );

    if(texto == ""){
        aviso.textContent = "EL CAMPO DE TEXTO SE DEBE LLENAR";
    }
    else if(texto!== txt){
        aviso.textContent = "NO DEBE TENER ACENTOS NI CARACTERES ESPECIALES"; 
    }
    else if(texto!==texto.toLowerCase()){
        aviso.textContent="EL TEXTO DEBE SER EN MINÚSCULA";
    }

    else{
        texto= texto.replace(/enter/mg,"e");
        texto= texto.replace(/imes/mg,"i");
        texto= texto.replace(/ai/mg,"a");
        texto= texto.replace(/ober/mg,"o");
        texto= texto.replace(/ufat/mg,"u");
    
    
        rta.innerHTML = texto;
        contenido.remove();
    }

});

botonCopiar.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = rta;
    copiar.select();
    document.execCommand("copy");
});


/*function encriptar(){
    let texto=document.getElementById("ingrese-texto").value;
    let textoEncriptado =texto
                            .replace(/e/i,"enter")
                            .replace(/a/i,"ai")
                            .replace(/o/i,"ober")
                            .replace(/u/,"ufat")
                            .replace(/i/i,"imes");
    textoEncriptado=document.querySelector("#img-robot").value;
    document.querySelector("ingrese-texto").value; 
}
    let boton1 = document.querySelector("#boton1"); boton1.onclick = encriptar

    function desencriptar(){

    }
    /*let texto=document.getElementById("ingrese-texto").value;
    let tituloMensaje = document.getElementById("mensaje");
    let parrafo= document.getElementById("p");
    let robot= document.getElementById("img-robot");


    let textoEncriptado = texto
                            .replace(/e/i,"enter")
                            .replace(/a/i,"ai")
                            .replace(/o/i,"ober")
                            .replace(/u/,"ufat")
                            .replace(/i/i,"imes");
    if (texto.lenght !=0)
        texto = textoEncriptado;
        tituloMensaje.textContent= "Texto encriptado con éxito";
        parrafo.textContent ="";
        robot.src = "./img/robot.png";



}


    //i es para que afecte tanto a mayúsculas como a minúsculas
    //g es para toda la línea u oración 
    //m es para que afecte a múltiples líneas o párrafo
    
    /*let textoEncriptado = texto.replace(/e/i,"enter")
    .replace(/a/i,"ai")
    .replace(/o/i,"ober")
    .replace(/u/,"ufat")
    .replace(/i/i,"imes");

    document.getElementById("img-robot").style.display=none;
    document.getElementById("mensaje").style.display=none;
}*/