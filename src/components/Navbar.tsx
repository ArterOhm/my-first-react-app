import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../provifers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
              Create
            </NavLink>
            <NavLink className={classes.login} onClick={logout} to="/">
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink className={classes.login} to="/Login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}
export default Navbar
