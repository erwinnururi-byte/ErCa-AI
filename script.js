// ===============================
// ErCa AI - Script.js
// ===============================

// Mensaje de bienvenida
window.addEventListener("load", () => {
    console.log("🚀 Bienvenido a ErCa AI");
});

// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
});

document.querySelectorAll(".card, .stats div, .about, .cta").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "1s";

    observer.observe(el);

});

// Efecto en botones
document.querySelectorAll(".btn, .primary, .secondary").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// Contador animado
const stats = document.querySelectorAll(".stats h2");

stats.forEach(stat => {

    let objetivo = stat.innerText;

    if (!isNaN(parseInt(objetivo))) {

        let numero = parseInt(objetivo);
        let contador = 0;

        let intervalo = setInterval(() => {

            contador++;

            stat.innerText = contador;

            if (contador >= numero) {

                clearInterval(intervalo);

                if (objetivo.includes("%")) {

                    stat.innerText = numero + "%";

                }

                if (objetivo.includes("+")) {

                    stat.innerText = numero + "+";

                }

            }

        }, 20);

    }

});

// Animación del robot
const robot = document.querySelector(".robot");

if(robot){

setInterval(()=>{

robot.style.transform="rotate(5deg)";

setTimeout(()=>{

robot.style.transform="rotate(-5deg)";

},500);

},1000);

}

// Efecto Navbar
window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>50){

nav.style.background="#020617";

}else{

nav.style.background="rgba(15,23,42,.85)";

}

});

// Saludo según la hora
const hora = new Date().getHours();

if(hora < 12){

console.log("☀️ Buenos días");

}else if(hora < 18){

console.log("🌤 Buenas tardes");

}else{

console.log("🌙 Buenas noches");

}

// Función para abrir el chat
function abrirChat(){

window.location.href="chat.html";

}

// Permite usar la tecla Enter en botones
document.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const boton=document.querySelector(".primary");

if(boton){

boton.click();

}

}

});

// Footer automático
const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" ErCa AI | Startup creada por Erwin & Carlos";

}

