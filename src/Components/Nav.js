import React from 'react'

function Nav() {
  return (
    <div>
        <nav className='nava'>
            <h1 className='icono'>⚡</h1>
            <ul className='lista'>
                <li><a href='https://react.dev/'>React</a></li>
                <li><a href='https://react.dev/reference/react-dom/components/'>Componentes</a></li>
                <li><a href='https://www.github.com/'>Github</a></li>
                <li><a href='https://www.youtube.com/'>Youtube</a></li>
            </ul>        
        </nav>      
    </div>
  )
}

export default Nav
