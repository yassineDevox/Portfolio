import React from 'react'
import './assets/main.css';
import NavBar from './components/navBar/nav-bar';
import SideBar from './components/sidebar/side-bar';
import Hero from './components/hero/hero';


const App = ({ children }) => {
    return (
        <>
            <NavBar />
            <SideBar />
            {children}
            <Footer />
        </>
    )
}
export default App;