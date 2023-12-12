import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <nav>
        <Link to={'/'}>HOME</Link><br />
        <Link to={'about'}>About</Link><br />
        <Link to={'contact'}>Contact</Link><br />
        <Link to={'footer'}>Footer</Link><br />
<hr/>
    </nav>
    
    <Outlet/>
    </>
    
  )
}
