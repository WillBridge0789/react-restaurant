import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import Header from "./Header";
import Menu from './Menu';
import Footer from "./Footer";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
            console.log(response.data);
            setData(response.data);
            // ...
        }
        fetchData();
    }, []);
    return (
        <div>
            <NavBar />
            <Header />
            <Menu />
            <Footer />

        </div>
    )
}

export default App;