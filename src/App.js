import React, { useState } from "react"
import ButtonsComponents from "./components/ButtonsComponents"
import DisplayComponents from "./components/DisplayComponents"

function App() {

  const [time, setTime] = useState({ milliSecond: 0, second: 0, minute: 0, hour: 0 })
  const [interv, setInterv] = useState()

  const start = () => {
    run()
    setInterv(setInterval(run, 10))
  }

  let { milliSecond, second, minute, hour } = time

  const run = () => {
    if (minute === 60) {
      hour++
      minute = 0
    }
    if (second === 60) {
      minute++
      second = 0
    }
    if (milliSecond === 100) {
      second++
      milliSecond = 0
    }
    milliSecond++
    return setTime({ milliSecond, second, minute, hour })
  }

  const stop = () => {
    clearInterval(interv)
  }

  const reset = () => {
    setTime({ milliSecond: 0, second: 0, minute: 0, hour: 0 })
    clearInterval(interv)
  }

  return (
    <div className="App">
      <DisplayComponents time={time} />
      <ButtonsComponents start={start} stop={stop} reset={reset} />
    </div>
  );
}

export default App;
