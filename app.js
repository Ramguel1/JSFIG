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