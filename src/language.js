// these values may be already used by other scripts,
// use those variables if that is the case!
const document_path = window.location.pathname;
const page = document_path.split("/").pop().split(".")[0];

const langcode_user_full = window.navigator.userLanguage || window.navigator.language;
const langcode_user = langcode_user_full.split("-")[0];

// translates page at start
translate(langcode_user);

function translate(langcode) {
    if(!langcode) return;

    fetch(`./src/data/${page}/lang_${langcode}.json`)
    .then((response) => response.json())
    .then((json) => loadElementTranslations(json));

    function loadElementTranslations(json) {
        if(!json) return; 

        for(var key in json) {
            document.getElementById(`--field-${key}`).innerText = json[key];
        }
    }
}

// This function is for testing purposes, you can safely remove it.
function spanish() {
    translate('es');
}
