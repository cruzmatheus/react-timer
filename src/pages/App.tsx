import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <Timer />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
