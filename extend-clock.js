/**
*
3. Scrivi nel file `extended-clock.js` la classe `ExtendendClock` che estende `Clock` aggiungendo
un parametro `precision` che rappresenta il numero di ms fra un "tick" dell'orologio e un altro.
Il parametro `precision` dovrebbe essere un "named parameter" e avere valore di default 1000ms (1 sec).
*/

class ExtendendClock {
  constructor({ template, limit, precision = 1000 }) {
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
      timer = setInterval(render, precision)
    }
    function stop() {
      clearInterval(timer)
    }
  }
}

const clock2 = new ExtendendClock({ template: 'h:m:s', limit: 3, precision: 333 })
clock2.start()