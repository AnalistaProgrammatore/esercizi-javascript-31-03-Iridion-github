/*
1. Defer aggiungi al prototype di Function nel file defer.js (quindi aggiungi a tutte le funzioni) il metodo defer così definito:
il metodo defer(ms) prende in input un numero e ritarda l'esecuzione della funzione a cui si applica il metodo di ms millisecondi
Per poter svolgere l'esercizio va prima studiata la funzione setTimeout
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
*/

Function.prototype.defer = function (ms) {
  setTimeout(this, ms)
}

function hello() {
  console.log("hello world")
}

hello.defer(2000)