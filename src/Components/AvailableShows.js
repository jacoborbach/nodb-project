import React, { Component } from 'react';
import Shows from './Shows';

class AvailableShows extends Component {

    render() {
        console.log(this.props)
        let { availableShows, searchResults } = this.props;
        //console.log(searchResults);
        //console.log(availableShows);

        let mappedShows = searchResults.length > 0 ? (
            searchResults.map(element => {
                return (
                    <div className="resultsFlex">
                        {element.map(el => {
                            return (
                                <div >
                                    <h4>{el.name}</h4>
                                    <img src={el.picture} alt={el.picture} style={{ height: 200, width: 300 }}></img>
                                </div>
                            )
                        })}
                        <div>{console.log('1')}</div>
                    </div >

                )
            })
        )
            : (
                availableShows.map(element => {
                    return (
                        <div>
                            <Shows show={element} key={element.id} watchFn={this.props.watchFn} />
                            <div>{console.log('2')}</div>
                        </div>
                    )
                })
            )

        return (
            <div className="availableShows">
                {/* conditional rendering */}

                { mappedShows}
            </div>
        )
    }
}

export default AvailableShows;
