import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/ITask"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

interface Props {
  selected?: ITask,
  finishTask: () => void
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time))
  }, [selected])

  function countDown(timer: number = 0) {
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1)
        return countDown(timer - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={() => countDown(time)}>
        Start!
      </Button>
    </div>
  )
}