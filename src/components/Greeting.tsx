import { useState } from 'react'
import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  age: number
  isLoggedIn: boolean
}

const Greeting = ({ name, age, isLoggedIn }: IGreetingProps) => {
  const [GreetingMsg, setGreetingMsg] = useState<string>('Welcome!')

  const handleClick = () => {
    setGreetingMsg('Hello!')
  }
  return (
    <>
      <div className={classes.card}>
        <h3>{GreetingMsg}</h3>
        {isLoggedIn ? (
          <>
            <div>
              <p>name:{name}</p>
              <p>age:{age}</p>
            </div>
          </>
        ) : (
          <p>Unknown</p>
        )}
      </div>
      <button onClick={handleClick}>Chang Message</button>
    </>
  )
}
export default Greeting
