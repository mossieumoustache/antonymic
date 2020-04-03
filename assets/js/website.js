import Translator from "./antonymicTranslator.js";

document.querySelector("form").addEventListener("click", function(evt) {
    if (evt.target.tagName === "INPUT") {
        translator.load(evt.target.value);
    }
});

document.getElementById("hamburger-button").addEventListener("click",function(){
    document.getElementById("hamburger-button").classList.toggle("clicked");
    document.querySelector("nav").classList.toggle("clicked");
});

var translator = new Translator({
    persist: false,
    languages: ["en", "fr"],
    defaultLanguage: "en",
    detectLanguage: true,
    // filesLocation: "/antonymic/assets/languages" //for dev on antonymic
    filesLocation: "/assets/languages" //for localhost dev
});

translator.load();
