import React from 'react'
import Link from 'next/link'

interface Props{
    icon: string
    linkString: string
}

const NavBarIcon = ({icon, linkString}: Props) => {
  return (
    <div tabIndex={0} role='button' className = "flex-none">
        <ul tabIndex={0} role='tab' className='tab px-1 mr-2'>
                <li><Link href={linkString}><img className="h-7 transition-all duration-300 filter grayscale hover:grayscale-0" src={icon}/></Link></li>
            </ul>
    </div>
  )
}

export default NavBarIcon