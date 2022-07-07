import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/ITask"
import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'

interface Props {
  selected?: ITask
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time))
  }, [selected])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choose a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button>
        Start!
      </Button>
    </div>
  )
}