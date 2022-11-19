import React from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../../logo-design/dashboard.png'
import data from '../../logo-design/data.png'
import history from '../../logo-design/history.png'
import help from '../../logo-design/help.png'
import settings from '../../logo-design/settings.png'
import privacy from '../../logo-design/privacy.png'

const Sidebar = () => {
  return (
    <>
      <aside className='fixed left-0  bg-blue-500 w-48 h-screen'>
        <nav className='flex'>
          <ul className='flex-col gap-4 px-3 justify-between capitalize '>
            <li>
              <Link to='#0' className='flex items-center gap-1'>
                <img src={dashboard} alt='dashboard' /> dashboard
              </Link>
              <Link to='#0' className='flex gap-1 items-center'>
                <img src={data} alt='' />
                import data
              </Link>
              <Link to='#0' className='flex gap-1 items-center'>
                <img src={history} alt='' /> history
              </Link>
              <Link to='#0' className='flex gap-1 items-center'>
                <img src={settings} alt='' /> settings
              </Link>
            </li>
          </ul>
          <ul className='px-2 absolute bottom-2'>
            <Link to='#0' className='flex  gap-1'>
              <img src={privacy} alt='' /> dashboard
            </Link>
            <Link to='#0' className='flex gap-1'>
              <img src={help} alt='' /> dashboard
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  )
}
export default Sidebar
