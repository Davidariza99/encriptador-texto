const inputText = document.querySelector('#area-user-text');
const encryptButton = document.querySelector('.button-encrypt');
const decryptButton = document.querySelector('.button-decrypt');
const noMessageImg = document.querySelector('.aside-image');
const noMessage = document.querySelector('#no-message');
const noText = document.querySelector('#enter-text');
const copyButton = document.querySelector('.button-copy');
const currentResult = {value: document.querySelector("result")};

function encrypt(){
    const text = inputText.value;
    
    if(text.trim() == ""){
        return alert("Por favor ingrese un texto para encriptar o desencriptar"); 
    }
    
    if(/[A-ZÁÉÍÓÚÑÜáéíóúñü!@#\$%\^\&*\)\(+=._-]/.test(text)){
        return alert("El texto no debe incluir mayúsculas, acentos ni símbolos")
    }

    const encryptText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    showText(encryptText);
    inputText.value = ""; 
}

function decrypt(){
    const text = inputText.value;
    
    if(text == ""){
        return alert("Por favor ingrese un texto para encriptar o desencriptar"); 
    }
    
    if(/[A-ZÁÉÍÓÚÑÜáéíóúñü!@#\$%\^\&*\)\(+=._-]/.test(text)){
        return alert("El texto no debe incluir mayúsculas, acentos ni símbolos")
    }

    const decryptText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    showText(decryptText);
    inputText.value = ""; 
}

function showText(text){
    if(!currentResult.value){
        currentResult.value = document.createElement("textarea");
        currentResult.value.setAttribute("readonly", "true");
        currentResult.value.id = "result";
        copyButton.parentElement.insertBefore(currentResult.value, copyButton);
    }
    
    currentResult.value.textContent = text;

    noMessageImg.classList.add("hidden");
    noMessage.classList.add("hidden");
    noText.classList.add("hidden");
    copyButton.classList.remove("hidden");
}

function copy(){
    currentResult.value.select();
    document.execCommand("copy");
}

function reset(){
    location.reload();
}

encryptButton.addEventListener('click', encrypt)
decryptButton.addEventListener('click', decrypt)
copyButton.addEventListener('click', copy)


