var Food = require('./img/cuisine.jpg');

function Header() {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Restaurant</h1>
                    <img src={Food} />
                </div>
            </div>
        </div>
    )
}

export default Header;