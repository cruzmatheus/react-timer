import style from './List.module.scss'
import Item from './Item'
import { ITask } from '../../types/ITask'

interface Props {
  tasks: ITask[],
  selectTask: (selectedTasks: ITask) => void
}

function List({ tasks, selectTask }: Props) {
  return (
      <aside className={style.listaTarefas}>
          <h2>Today's studies</h2>
          <ul>
            {tasks.map((element) => (
              <Item
                selectTask={selectTask}
                key={element.id}
              {...element} 
              />
            ))}
          </ul>
      </aside>
  )
}

export default List