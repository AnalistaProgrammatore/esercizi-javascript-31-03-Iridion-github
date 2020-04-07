/**
2. Riscrivi la funzione come classe nel file `clock.js`. 
Per poter svolgere l'esercizio vanno prima studiate:
    - La classe built-in `Date` per la gestione delle date e del tempo in js https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    - Le funzioni `setInterval` e `clearInterval`
      - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
      - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
**/

function Clock({ template }) {
  let timer
  function render() {
    let date = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours
    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins
    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs
    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)
    console.log(output)
  }
  this.start = function () {
    render();
    timer = setInterval(render, 1000)
  }
}

//let clock = new Clock({ template: 'h:m:s' })
//clock.start()

//---------------------------------------------------
class Clock2 {
  constructor({ template, limit }) {
    let timer
    let cycle = 0
    function render() {
      let date = new Date()
      let hours = date.getHours()
      if (hours < 10)
        hours = '0' + hours
      let mins = date.getMinutes()
      if (mins < 10)
        mins = '0' + mins
      let secs = date.getSeconds()
      if (secs < 10)
        secs = '0' + secs
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
      console.log(output)
      cycle++
      if (cycle >= limit) stop()
    }
    this.start = function () {
      render()
      timer = setInterval(render, 1000)
    }
    function stop() {
      clearInterval(timer)
    }
  }
}

const clock2 = new Clock2({ template: 'h:m:s', limit: 3 })
clock2.start()