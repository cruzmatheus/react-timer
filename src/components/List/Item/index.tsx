import { ITask } from '../../../types/ITask'
import style from '../List.module.scss'

interface Props extends ITask {
  selectTask: (selectedTasks: ITask) => void
}

export default function Item({id, name, time, selected, completed, selectTask}: Props) {
  return (
    <li 
      className={style.item}
      onClick={() => selectTask({id, name, time, selected, completed})}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
}