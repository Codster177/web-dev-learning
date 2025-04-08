import React from 'react'

interface Props{
    children: string;
    dropDown?: boolean;
    dropDownList?: string[];
}

function navBarHelper(children: string, dropDown: boolean, dropDownList: string[]){
    if (dropDown == false)
    {
        return (
            <ul tabIndex={0} className='menu menu-horizontal px-1 mr-3'>
                <li><a>{children}</a></li>
            </ul>
        )
    }
    else
    {
        return (

            <ul tabIndex={0} className='menu menu-horizontal px-1 mr-3'>
                <li><a>{children}</a></li>
            </ul>


        // <ul tabIndex={0} className='menu menu-horizontal px-1 mr-3'>
        // <li>
        //     <details className='dropdown'>
        //         <summary>{children}</summary>
        //         <ul className="dark:bg-gray-700 bg-base-100 rounded-t-none p-2">
        //             {dropDownList.map((item, index)=>(
        //                 <li key = {index}><a>{item}</a></li>
        //             ))}
        //         </ul>
        //     </details>
        //     </li>
        // </ul>
        )
    }
}


const NavBarItem = ({children, dropDown = false, dropDownList = []}: Props) => {
    return (
    <div tabIndex={0} role='button' className = "flex-none">
            {navBarHelper(children, dropDown, dropDownList)}
    </div>
  )
}

export default NavBarItem