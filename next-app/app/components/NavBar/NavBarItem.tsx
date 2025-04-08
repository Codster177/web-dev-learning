import React from 'react'


interface Props{
    children: string;
    dropDown?: boolean;
    dropDownList?: string[];
}

function navBarHelper(children: string, dropDown: boolean, dropDownList: string[]){
    if (dropDown == false)
    {
        return <li><a>{children}</a></li>
    }
    else
    {
        return (<li>
            <details>
                <summary>{children}</summary>
                <ul className="dark: bg-gray-700 bg-base-100 rounded-t-none p-2">
                    {dropDownList.map((item, index)=>(
                        <li key = {index}><a>{item}</a></li>
                    ))}
                </ul>
            </details>
            </li>)
    }
}


const NavBarItem = ({children, dropDown = false, dropDownList = []}: Props) => {
    return (
    <div className = "flex-none">
            <ul className='menu menu-horizontal px-1'>
                {navBarHelper(children, dropDown, dropDownList)}
            </ul>
    </div>
  )
}

export default NavBarItem