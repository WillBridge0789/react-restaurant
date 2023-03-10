import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    const items = menuItems.filter(item => item.category === 'Lunch').map(item => <MenuItem key={item.id} food={item} />)
    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/MDXW')
            .then(function (response) {
                console.log(response.data);
                setMenuItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                //always executed
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Menu Items</h2>
                    <div className="d-flex flex-wrap justify-content-center">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;