'use strict';

const meinSkript = () => {
  // Wir geben eine Nachricht in der JavaScript-Konsole aus.
  console.log('Hallo, Konsole!');

  // Wir holen uns den Eintrag, der im index.html als <div id="dynamischer_inhalt"></div> eingetragen ist.
  const dynamischerInhalt = document.getElementById("dynamischer_inhalt");

  // Wir erstellen ein neues Element, welches in das Element "dynamischerInhalt" eingefügt wird.
  const begruessung = document.createElement('span');
  begruessung.textContent = "Hallo, Browser!";
  dynamischerInhalt.appendChild(begruessung);
};