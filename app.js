let ancho=document.querySelector("#ancho");
let alto=document.querySelector("#alto");
let color=document.querySelector("#color");
let anchoB=document.querySelector("#anchoB");
let colorB=document.querySelector("#colorB");
let tipob=document.querySelector("#tipob");

let vancho=document.querySelector("#vancho");
let valto=document.querySelector("#valto");
let vanchoB=document.querySelector("#vanchoB");
let fig=document.querySelector("#fig");



ancho.oninput=()=> dibujar();
alto.oninput=()=> dibujar();
anchoB.oninput=()=> dibujar();
color.onchange=()=> dibujar();
colorB.onchange=()=> dibujar();
tipob.onchange=()=> dibujar();


const dibujar=()=>{
    
    let a=parseInt(ancho.value);
    vancho.innerHTML=a;
    fig.style.width=a+"px";

    let al=parseInt(alto.value);
    valto.innerHTML=al;
    fig.style.height=al+"px";
    
    let cl=color.value;
    fig.style.backgroundColor=cl;

    let ab=parseInt(anchoB.value);
    vanchoB.innerHTML=ab;
    fig.style.borderWidth=ab+"px";

    
    let c=colorB.value;
    fig.style.borderColor=c;

    let tipo=tipob.value;
    fig.style.borderStyle=tipo;
}



---------------------------------------------------------------------------

    let ancho=document.querySelector("#ancho");
let alto=document.querySelector("#alto");
let color=document.querySelector("#color");
let anchoB=document.querySelector("#anchoB");
let colorB=document.querySelector("#colorB");
let tipob=document.querySelector("#tipob");
let radio=document.querySelector("#radio");
let rotat=document.querySelector("#rotate");
let tras=document.querySelector("#tras");
let tras1=document.querySelector("#tras1");
let sca=document.querySelector("#sca");
let x=document.querySelector("#x");

let vancho=document.querySelector("#vancho");
let valto=document.querySelector("#valto");
let vanchoB=document.querySelector("#vanchoB");
let vradio=document.querySelector("#vradio");
let vrotate=document.querySelector("#vrotate");
let fig=document.querySelector("#fig");
let vtras=document.querySelector("#vtras");
let vtras1=document.querySelector("#vtras1");
let vsca=document.querySelector("#vsca");




ancho.oninput=()=> dibujar();
alto.oninput=()=> dibujar();
anchoB.oninput=()=> dibujar();
color.onchange=()=> dibujar();
colorB.onchange=()=> dibujar();
tipob.onchange=()=> dibujar();
radio.onchange=()=> dibujar();
rotat.oninput=()=> dibujar();
tras.oninput=()=> dibujar();
tras1.oninput=()=> dibujar();
sca.oninput=()=> dibujar();


const dibujar=()=>{
    
    let a=parseInt(ancho.value);
    vancho.innerHTML=a;
    fig.style.width=a+"px";

    let al=parseInt(alto.value);
    valto.innerHTML=al;
    fig.style.height=al+"px";
    
    let cl=color.value;
    fig.style.backgroundColor=cl;

    let ab=parseInt(anchoB.value);
    vanchoB.innerHTML=ab;
    fig.style.borderWidth=ab+"px";

    
    let c=colorB.value;
    fig.style.borderColor=c;

    let tipo=tipob.value;
    fig.style.borderStyle=tipo;

    let r=parseInt(radio.value);
    vradio.innerHTML=r;
    fig.style.borderRadius=r+"px";

    let ro=parseInt(rotat.value);
    vrotate.innerHTML=ro;
    fig.style.rotate=ro+"deg";

    let s=parseInt(sca.value);
    vsca.innerHTML=s;

    let tr=parseInt(tras.value);
    vtras.innerHTML=tr;
    let tr2=parseInt(tras1.value);
    vtras1.innerHTML=tr2;


    fig.style.transform=" translateX("+tr+"px) translateY("+tr2+"px) scale("+s+")";


}
