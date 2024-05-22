
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="NavContainer">
        <ul>
            <li><NavLink to="/">صفحه اصلی</NavLink></li>
            <li><NavLink  to="Home">خانه</NavLink></li>
            <li><NavLink to="Abouteme">درباره ی ما</NavLink></li>
            <li><NavLink to="Lesson">درسنامه</NavLink></li>
          
        </ul>
        <p><Outlet/></p>
    </div>
  )
}

export default Layout