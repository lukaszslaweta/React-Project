import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Topbar = () => {

    useEffect(() => {

    })
  return (
    <section className="topbar">
        <div className="flex-between py-4 px-5">
            <Link to="/" className="flex gap-3 items-center">
                <img
                    src="assets/images/logo.svg"
                    alt="logo"
                    width={130}
                    height={325}
                />
            </Link>

            <div className="flex gap-4">
                <Button>
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
                <Link className="flex-center gap-3">
                    <img 
                        src="/assets/images/profile.png"
                    />
                </Link>

            </div>
        </div>
    </section>
  )
}

export default Topbar


