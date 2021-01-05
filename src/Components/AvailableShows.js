import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Shows from './Shows';

class AvailableShows extends Component {

    render() {
        //console.log(this.props)
        let { availableShows, searchResults } = this.props;
        //console.log(searchResults);
        //console.log(availableShows);

        let mappedShows = searchResults.length > 0 ? (
            searchResults.map(element => {
                return (
                    <div className="resultsFlex">
                        {element.map((el, i) => {
                            return (
                                <div key={i}>
                                    <SearchResults result={el} watchFn={this.props.watchFn} />
                                </div>
                            )
                        })}
                        {/* <div>{console.log('1')}</div> */}
                    </div >

                )
            })
        )
            : (
                availableShows.map(element => {
                    return (
                        <div key={element.id}>
                            <Shows show={element} watchFn={this.props.watchFn} />
                            {/* <div>{console.log('2')}</div> */}
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
