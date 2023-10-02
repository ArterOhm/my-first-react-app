import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  age: number
}

const Greeting = ({ name, age }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
      </div>
    </div>
  )
}
export default Greeting
