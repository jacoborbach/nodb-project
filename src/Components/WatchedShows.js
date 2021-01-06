import Watched from './Watched';

const WatchedShows = (props) => {
    //console.log(props)
    return (
        <div className="watchedShows">
            <button onClick={props.clearFn} className='clear'>Clear</button>
            <h2>Watched Shows</h2>
            {props.watchedShows.map(watchedShow => {
                return <Watched watchedShow={watchedShow} key={watchedShow.id} editFn={props.editFn} deleteFn={props.deleteFn} />
            })}
        </div>
    )
}

export default WatchedShows;