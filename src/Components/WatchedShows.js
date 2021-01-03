import Watched from './Watched';

const WatchedShows = (props) => {
    //console.log(props)
    return (
        <div className="watchedShows">
            <h2>Watched Shows</h2>
            {props.watchedShows.map((watchedShow, i) => {
                return <Watched watchedShow={watchedShow} key={i} editFn={props.editFn} deleteFn={props.deleteFn} />
            })}
        </div>
    )
}

export default WatchedShows;