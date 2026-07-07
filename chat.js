// ==========================
// ErCa AI - Chat.js
// ==========================

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChat = document.getElementById("newChat");

// Respuestas inteligentes
const respuestas = {
    "hola": "¡Hola! 👋 Soy ErCa AI. ¿En qué puedo ayudarte hoy?",
    "buenos dias": "¡Buenos días! ☀️ Espero que tengas un excelente día.",
    "buenas tardes": "¡Buenas tardes! 😊",
    "buenas noches": "¡Buenas noches! 🌙",
    "como estas": "Estoy funcionando perfectamente. ¿Y tú?",
    "quien eres": "Soy ErCa AI, un asistente virtual creado por Erwin y Carlos.",
    "que puedes hacer": "Puedo responder preguntas, ayudarte con información y conversar contigo.",
    "gracias": "¡Con gusto! 😊",
    "adios": "¡Hasta luego! Que tengas un excelente día. 👋"
};

// Enviar mensaje
function enviarMensaje(){

    const texto = input.value.trim();

    if(texto==="") return;

    agregarUsuario(texto);

    input.value="";

    escribiendo();

    setTimeout(()=>{

        responder(texto);

    },1200);

}

// Mensaje usuario
function agregarUsuario(texto){

    chatBox.innerHTML += `
    <div class="user">
        <div class="message">${texto}</div>
        <i class="fa-solid fa-user"></i>
    </div>
    `;

    bajar();

}

// Escribiendo...
function escribiendo(){

    const div=document.createElement("div");

    div.className="bot";

    div.id="typing";

    div.innerHTML=`
        <i class="fa-solid fa-robot"></i>
        <div class="message">
            Escribiendo...
        </div>
    `;

    chatBox.appendChild(div);

    bajar();

}

// Responder
function responder(texto){

    const typing=document.getElementById("typing");

    if(typing){

        typing.remove();

    }

    let mensaje="Lo siento 😅 todavía estoy aprendiendo. Esa función llegará en una próxima versión.";

    texto=texto.toLowerCase();

    for(let palabra in respuestas){

        if(texto.includes(palabra)){

            mensaje=respuestas[palabra];

            break;

        }

    }

    chatBox.innerHTML+=`
        <div class="bot">
            <i class="fa-solid fa-robot"></i>
            <div class="message">${mensaje}</div>
        </div>
    `;

    bajar();

}

// Scroll automático
function bajar(){

    chatBox.scrollTop=chatBox.scrollHeight;

}

// Botón enviar
sendBtn.addEventListener("click",enviarMensaje);

// Enter
input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        enviarMensaje();

    }

});

// Nuevo chat
newChat.addEventListener("click",()=>{

    chatBox.innerHTML=`

    <div class="bot">

        <i class="fa-solid fa-robot"></i>

        <div class="message">

            Hola 👋 Soy ErCa AI.
            ¿Cómo puedo ayudarte hoy?

        </div>

    </div>

    `;

});

// Saludo automático según la hora
window.onload=()=>{

    const hora=new Date().getHours();

    let saludo="";

    if(hora<12){

        saludo="☀️ Buenos días.";

    }

    else if(hora<18){

        saludo="🌤 Buenas tardes.";

    }

    else{

        saludo="🌙 Buenas noches.";

    }

    chatBox.innerHTML+=`

    <div class="bot">

        <i class="fa-solid fa-robot"></i>

        <div class="message">

            ${saludo} Soy ErCa AI, listo para ayudarte.

        </div>

    </div>

    `;

    bajar();

};

