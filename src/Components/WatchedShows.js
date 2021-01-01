import Watched from './Watched';

const WatchedShows = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Watched Shows</h2>
            {/* <img src={props.watchedShows.img} alt={props.watchedShows.img}></img>
            <h4>{props.watchedShows.name}</h4> */}
            {props.watchedShows.map((watchedShow, i) => {
                return <Watched watchedShow={watchedShow} key={i} />
            })}
        </div>
    )
}

export default WatchedShows;