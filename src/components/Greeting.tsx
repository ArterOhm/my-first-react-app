import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  age: number
  isLoggedIn: boolean
}

const Greeting = ({ name, age, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      {isLoggedIn ? (
        <div>
          <p>name:{name}</p>
          <p>age:{age}</p>
        </div>
      ) : (
        <p>Unknown</p>
      )}
    </div>
  )
}
export default Greeting
