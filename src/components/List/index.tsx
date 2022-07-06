import style from './List.module.scss'

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
                <li key={index} className={style.item}>
                  <h3>{element.name}</h3>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
        </aside>
    )
}

export default List