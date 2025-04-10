import React from 'react'
import Link from 'next/link';

interface Props{
    children: string;
    linkString: string;
    dropDown?: boolean;
    dropDownList?: string[];
    className?: string;
}

function navBarHelper(children: string, dropDown: boolean, dropDownList: string[]){
    if (dropDown == false)
    {
        return (
            <ul tabIndex={0} role='tab' className='tab px-1 mr-2'>
                <li>{children}</li>
            </ul>
        )
    }
    else
    {
        return (
            <>
            <ul tabIndex={0} className='tab px-1 mr-2'>
                <li>{children}</li>
            </ul>
            {/* <ul tabIndex={0} className='tab px-1 mr-1 -ml-8'>
            <li>
                <details className='dropdown'>
                    <summary></summary>
                    <ul className="dark:bg-gray-700 bg-base-100 rounded-t-none p-2">
                        {dropDownList.map((item, index)=>(
                            <li key = {index}><a>{item}</a></li>
                        ))}
                    </ul>
                </details>
                </li>
            </ul> */}
            </>


        )
    }
}


const NavBarItem = ({children, linkString, dropDown = false, dropDownList = []}: Props, className = "") => {
    if (className != "")
    {
        className = "flex-none hover:animate-wiggle " + className
    }
    else
    {
        className = "flex-none hover:animate-wiggle"
    }
    
    return (
        <div tabIndex={0} role='button' className = "flex-none hover:animate-wiggle">
            <Link href={linkString}>
                {navBarHelper(children, dropDown, dropDownList)}
            </Link>
        </div>
  )
}

export default NavBarItem