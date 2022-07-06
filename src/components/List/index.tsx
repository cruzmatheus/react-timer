import style from './List.module.scss'
import Item from './Item'

function List() {
    const tasks = [
        {
          name: "React",
          time: "02:00:00"
        },
        {
          name: "Javascript",
          time: "01:00:00"
        }
    ]
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