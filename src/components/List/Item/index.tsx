import { ITask } from '../../../types/ITask'
import style from './Item.module.scss'

interface Props extends ITask {
  selectTask: (selectedTasks: ITask) => void
}

export default function Item({id, name, time, selected, completed, selectTask}: Props) {
  return (
    <li 
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
      onClick={() => !completed && selectTask({id, name, time, selected, completed})}>
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label="completed task"></span>}
    </li>
  )
}