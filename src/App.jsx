import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Generator from './components/Generator'
import Workout from './components/Workout'
import Hero from './components/Hero'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    if(muscles.length < 1){
      return 
    }
    let newWorkout = generateWorkout({poison, muscles,goal})
    console.log(newWorkout)
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-neutral-600 to-slate-800 text-white text-sm sm:text-base'>
      <Hero></Hero>
      <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout = {updateWorkout}/>
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
