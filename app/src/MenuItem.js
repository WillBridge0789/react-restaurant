function MenuItem(props) {
    return (
        <div className="card m-3">
            <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.food.title}</h5>
                    <p className="card-text">{props.food.description}</p>
                    <p className="card-text price">{props.food.price}</p>
                </div>
        </div>
    )
}

export default MenuItem;