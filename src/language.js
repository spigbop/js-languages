const language_settings_data_location = "./src/data/"; // location of language files
const language_settings_prefix = "--field-"; // prefix before elment ids default: --field-<name>

let page = "index";
{
    let document_path = window.location.pathname.split("/");
    let i = 1;
    while(document_path[document_path.length - i] === "") i++;
    if(i <= document_path.length) {
        page = document_path[document_path.length - i].split(".")[0];
    }
}

const langcode_user_full = window.navigator.userLanguage || window.navigator.language;
const langcode_user = langcode_user_full.split("-")[0];

translate(langcode_user);

function translate(langcode) {
    if(!langcode) return;
    
    readJson(`${language_settings_data_location}${page}/lang_${langcode}.json`);

    function readJson(directory) {
        fetch(directory)
        .then((response) => response.json())
        .then((json) => loadElementTranslations(json));
    }

    function loadElementTranslations(json) {
        if(!json) return;
        for(var key in json) {
            document.getElementById(`${language_settings_prefix}${key}`).innerText = json[key];
        }
    }
}
