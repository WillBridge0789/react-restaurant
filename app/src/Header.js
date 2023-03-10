var Food = require('./img/cuisine.jpg');

function Header() {
    return(
        <div className="container">
            <div className="row">
                <div className="col m-3">
                    <h1>Hi n'Bye</h1>
                    <img src={Food} />
                </div>
            </div>
        </div>
    )
}

export default Header;