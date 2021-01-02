const Watched = (props) => {
    //console.log(props)
    return (
        <div>
            <img src={props.watchedShow.img} alt={props.watchedShow.img} style={{ width: 200, height: 250 }}></img>
            <h4>{props.watchedShow.name}</h4>
        </div>
    )
}

export default Watched;