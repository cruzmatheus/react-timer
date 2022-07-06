import style from './List.module.scss'
import Item from './Item'
import { ITask } from '../../types/ITask'

function List({ tasks }: {tasks: ITask[]}) {
  return (
      <aside className={style.listaTarefas}>
          <h2>Today's studies</h2>
          <ul>
            {tasks.map((element, index) => (
              <Item
                key={index}
              {...element} 
              />
            ))}
          </ul>
      </aside>
  )
}

export default List