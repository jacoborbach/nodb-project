const Shows = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.show.img} alt={props.img}></img>
            <h4>{props.show.name}</h4>
        </div>
    )
}

export default Shows;

