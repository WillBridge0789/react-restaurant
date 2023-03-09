import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import NavBar from "./NavBar";
import Header from "./Header";
import Menu from './Menu';
import Footer from "./Footer";

function App() {
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        const result = await axios(
            //api url
        );


    setData(result.data);
  }, []);
    return(
        <div>
            <NavBar />
            <Header />
            <Menu />
            <Footer />
            
        </div>
    )
}

export default App;