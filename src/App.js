import React from "react";
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/DIalogs/Dialogs";


function App() {
    return (
        <div className="container">
            <div className='app-wrapper'>
                <Header />
                <Navbar />

                <div className='app-wrapper-content'>
                    {/*<Dialogs/>*/}
                    <Profile/>
                </div>
            </div>
        </div>
    );
}


export default App;
