import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <button className={classes.login}>Login</button>
      </div>
    </nav>
  )
}
export default Navbar
