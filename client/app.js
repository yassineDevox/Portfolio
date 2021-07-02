import React from 'react'

const App = ({ children }) => {
    return (
        <>
            {/* <!-- Header Part --> */}
            <header>
                <div className="menu">
                    <p className="logo">
                        web<span>dev</span>
                    </p>
                    <img 
                        className="menu-icon" 
                        src="img/menu.svg" 
                        alt="menu-icon"
                    />
                </div>
            </header>

            {/* <!-- Header Part /--> */}

            {/* <!-- Main Content --> */}
            <main className="main-content">
                {children}
            </main>

            {/* <!-- Main Content /--> */}
        </>
    )
}
export default App;