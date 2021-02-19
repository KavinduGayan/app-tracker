import { useState } from 'react'
import './App.css';
import Button from "./components/button";
import Header from "./components/header";
import AppNames from "./components/appNames";
import InputText from './components/InputText';
import AddAppForm from './components/AddAppForm';


function App() {
  const [appNames, setAppNames] = useState(
    [
      {
        id: 1,
        name: 'PUBG',
        reminder: true
      },
      {
        id: 2,
        name: 'MESSENGER',
        reminder: true
      },
      {
        id: 3,
        name: 'MEDIUM',
        reminder: true
      },
      {
        id: 4,
        name: 'FACEBOOK',
        reminder: true
      },
    ]
  )

  const newValue = [
    {
      id: 2,
      name: 'MESSENGER2',
      reminder: false
    }
  ]
  const onClick = (id) => {
    console.log('click the button')
    setAppNames(appNames.concat(newValue))
  }
  const onDelete = (id) => {
    console.log('on delete', id)
    setAppNames(appNames.filter((appName) => appName.id !== id))
  }
  const visibleForm = () => {
    console.log('set visible')
  }

  const addApps = (apps) => {
    console.log(apps)
  }
  const changeReminder = (id) => {
    console.log(id)
    setAppNames(appNames.map((appName) => appName.id === id ? {...appName,reminder:!appName.reminder}: appName))
  }
  return (
    <div className='container'>
      <Header title='App Tracker' />
      <Button text='Add' button_type='btn btn-success' onClick={onClick} onVisible={visibleForm} />
      {appNames.length > 0 ? <AppNames appNames={appNames} alertStyle='alert alert-primary' 
      onDelete={onDelete}
      onDoubleClick={changeReminder} /> : 'No Tasks to show'}
      <AddAppForm addApps={addApps}/>
    </div>
  );
}


export default App;
