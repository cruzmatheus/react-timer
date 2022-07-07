import { ITask } from '../../../types/ITask'
import style from '../List.module.scss'

export default function Item({id, name, time, selected, completed}: ITask) {
  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
}