import React from 'react'
import { ITask } from '../../types/ITask'
import Button from '../Button'
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

  state: ITask = {
    id: uuidv4(),
    name: "",
    time: "00:00:00",
    selected: false,
    completed: false
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks(oldTasks => 
      [...oldTasks, {
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ])
    this.setState({
      name: "",
      time: "00:00"
    })
  }
  
  render() {
    return (
      <form 
        className={style.novaTarefa}
        onSubmit={this.addTask.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor='task'>Add a new study subject</label>
          <input 
            type="text"
            name='task'
            id='task'
            value={this.state.name}
            onChange={event => this.setState({...this.state, name: event.target.value})}
            placeholder='What do you want to study?'
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
          <input
            type='time'
            step='1'
            name='time'
            id='time'
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value})}
            min='00:00:00'
            max='01:30:00'
            required />
        </div>
        <Button type="submit">
          Add
        </Button>
      </form>
    )
  }
}

export default Form