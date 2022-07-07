import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selectedTask, setSelectedTask] = useState<ITask>()
  
  function selectTask(selectedTask: ITask) {
    setSelectedTask(selectedTask)
    setTasks(previousTasks => previousTasks.map(task => (
        {...task, selected: task.id === selectedTask.id ? true : false}
    )))
  }

  function finishTask() {
    if (selectedTask) {
      setSelectedTask(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if (task.id === selectedTask.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks} 
        selectTask={selectTask}
      />
      <Timer
        selected={selectedTask}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
