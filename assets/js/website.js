import Translator from "./antonymicTranslator.js";

document.querySelector("form").addEventListener("click", function(evt) {
    if (evt.target.tagName === "INPUT") {
        // get type of speak
        var speak = document.querySelector('[name="speak"]:checked').value;
        translator.load(evt.target.value, speak);
    }
});

document.getElementsByName("speak").forEach(function(input) {
    input.addEventListener('change', function(e) {
        // get language name
        var language = document.querySelector('[name="lang"]:checked').value;
        translator.load(language, e.target.value);
    });
});

document.getElementById("hamburger-button").addEventListener("click",function(){
    document.getElementById("hamburger-button").classList.toggle("clicked");
    document.querySelector("nav").classList.toggle("clicked");
});

var translator = new Translator({
    persist: false,
    languages: ["en", "fr", "enfriendly", "frfriendly"],
    defaultLanguage: "en",
    variant: "gentle",
    detectLanguage: true,
    filesLocation: "/assets/languages"
});

translator.load();
