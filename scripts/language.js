//https://github.com/Sin-Gala/JS-HTML-Change-website-language

/* MIT License

Copyright (c) 2022 Galahane Rouillé-Poirel (SinGala)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

loadLanguagePref();

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem('selectedLanguage_heliomai', langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem('selectedLanguage_heliomai')) {
        var langSaved = localStorage.getItem('selectedLanguage_heliomai');

        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {
    var lang = langSelected;

    // Add a var for each language you want to support
    var langTxt = document.getElementsByClassName('lang');
    var enTxt = document.getElementsByClassName('en');
    var frTxt = document.getElementsByClassName('fr');

    for (var i = 0; i < langTxt.length; i++) {
        langTxt[i].style.display = 'none';
    }

    // Add the new languages to the fail-safe to make sure all variants will be shown correctly
    if (lang.includes('en')) {
        lang = 'en';
    }
    else if (lang.includes('fr')) {
        lang = 'fr';
    }

    // Add the new languages to switch the shown texts
    switch (lang) {
        case 'fr':
            for (var i = 0; i < frTxt.length; i++) {
                frTxt[i].style.display = 'block';
            }
            break;
        case 'en':
        default:
            for (var i = 0; i < enTxt.length; i++) {
                enTxt[i].style.display = 'block';
            }
            break;
    }

    document.getElementById('lang-switch').value = lang;
    document.documentElement.lang = lang;

    saveLanguagePref(lang);
}