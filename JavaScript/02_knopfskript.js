'use strict';

const alertKnopfGedrueckt = () => {
  // Mehr Informationen zu window.alert() unter https://developer.mozilla.org/de/docs/Web/API/Window/alert
  window.alert('Da hat jemand den Knopf gedrückt!');
}

const confirmKnopfGedrueckt = () => {
  // Mehr Informationen zu window.confirm() https://developer.mozilla.org/de/docs/Web/API/Window/confirm
  const antwort = window.confirm('OK oder Abbrechen?');
  if (antwort === true) {
    window.alert('Die Antwort war "OK"');
  } else {
    window.alert('Die Antwort war "Abbrechen"');
  }
}

const promptKnopfGedrueckt = () => {
  // Mehr Informationen zu window.prompt() unter https://developer.mozilla.org/de/docs/Web/API/Window/prompt
  const antwort = window.prompt('Wie viel ist 2 x 3?');

  // Mehr Informationen zu Number.isInteger() unter https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  if (Number.isInteger(parseInt(antwort)) !== true) {
    window.alert(`Aber aber, "${antwort}" ist doch keine Zahl -_-`);
    return;
  }

  // Mehr Informationen zu parseInt() unter https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  const antwortAlsZahl = parseInt(antwort);
  if (2 * 3 === antwortAlsZahl) {
    window.alert(`Richtig, die Antwort ist ${2 * 3} :-)`);
  } else {
    window.alert(`Falsch, die richtige Antwort ist nicht ${antwortAlsZahl} sondern ${2 * 3} :-(`);
  }
}

const farbenfrage = () => {
  const schlumpf = window.prompt('Welche Farbe hat das Herz?');

  if (schlumpf.toLowerCase() === 'rot') {
    window.alert("Richtig!");
  } else {
    window.alert("Falsch.");
  }

  // Wir holen uns den Eintrag, der im index.html als <div id="dynamischer_inhalt"></div> eingetragen ist.
  const dynamischerInhalt = document.getElementById("dynamischer_inhalt");

  // Wir erstellen ein neues Element, welches in das Element "dynamischerInhalt" eingefügt wird.
  const begruessung = document.createElement('span');
  begruessung.textContent = `Die eingegebene Farbe war ${schlumpf}`;
  dynamischerInhalt.appendChild(begruessung);
}
