import { Component } from "react";

class Watched extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            isEditing: false
        }
    }

    handleChange = (val) => {
        this.setState({ inputVal: val })
    }

    toggleView = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleEdit = (id) => {
        let { editFn } = this.props,
            { inputVal } = this.state;

        editFn(id, inputVal);
        this.toggleView();
    }


    render() {
        let { watchedShow, deleteFn } = this.props;
        //console.log(this.props)
        return (
            <div className="watched">
                <img src={watchedShow.img} alt={watchedShow.name}></img>
                {this.state.isEditing
                    ? (
                        <div>
                            <h4>{watchedShow.name}</h4>
                            <input
                                type='number' min='1' max='5'
                                value={this.state.inputVal}
                                onChange={(e) => this.handleChange(e.target.value)} />
                            <button onClick={() => this.handleEdit(watchedShow.id)}>Submit</button>
                            <button onClick={() => deleteFn(watchedShow.id)}>Remove Title</button>
                        </div>
                    )
                    : (
                        <div>
                            <h4>{watchedShow.name}</h4>
                            {/* conditonally rendering colors for Rating */}
                            {watchedShow.rating === "1" ? (
                                <h4>Rating: <span className='red'>{watchedShow.rating}</span></h4>
                            ) : (
                                    null
                                )}
                            {watchedShow.rating === "2" ? (
                                <h4>Rating: <span className='orange'>{watchedShow.rating}</span></h4>
                            ) : (
                                    null
                                )}
                            {watchedShow.rating === "3" ? (
                                <h4>Rating: <span className='yellow'>{watchedShow.rating}</span></h4>
                            ) : (
                                    null
                                )}
                            {watchedShow.rating === "4" ? (
                                <h4>Rating: <span className='lightGreen'>{watchedShow.rating}</span></h4>
                            ) : (
                                    null
                                )}
                            {watchedShow.rating === "5" ? (
                                <h4>Rating: <span className='green'>{watchedShow.rating}</span></h4>
                            ) : (
                                    null
                                )}


                            <button onClick={this.toggleView}>Edit Rating</button>
                            <button onClick={() => deleteFn(watchedShow.id)}>Remove Title</button>
                        </div>
                    )}
            </div>
        )
    }
}

export default Watched;