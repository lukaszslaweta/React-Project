import { sidebarLinks } from '@/constants'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <nav className="leftsider">
        <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
          </Link>

            <ul className="flex flex-col gap-6">
                {sidebarLinks.map((link: INavLink) => {
                    return (
                        <NavLink>
                            
                        </NavLink>
                )
                                        

                }

                )}
            
            </ul>    

        </div>
    </nav>
  )
}

export default LeftSidebar