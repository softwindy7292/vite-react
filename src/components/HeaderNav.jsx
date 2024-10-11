import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../route/Routes'

export const HeaderNav = () => {
    return (
        <div class="text-center mt-5">
            {
                /* 
      <Link to={'/'}>Home</Link> | 
      <Link to={'/board'}>board</Link> | 
      <Link to={'/profile'}>profile</Link> | 
      */
                routes.map((route, index) => (
                    <Link key={route.path || index} to={route.path}>
                        {' '}
                        | {route.title}
                    </Link>
                ))
            }
        </div>
    )
}

export default HeaderNav
