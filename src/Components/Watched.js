import { Component } from "react";

class Watched extends Component {
    constructor() {
        super();
        this.state = {
            nameInput: '',
            isEditing: false
        }
    }

    handleChange = (val) => {
        this.setState({ nameInput: val })
    }

    toggleView = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleEdit = (id) => {
        this.props.editFn(id, this.state.nameInput);
        this.toggleView();
    }

    render() {
        let { watchedShow, deleteFn } = this.props;
        return (
            <div>
                <img src={watchedShow.img} alt={watchedShow.name}></img>
                {this.state.isEditing
                    ? (
                        <div>
                            <input
                                value={this.state.nameInput}
                                onChange={(e) => this.handleChange(e.target.value)} />
                            <button onClick={() => this.handleEdit(watchedShow.id)}>Submit</button>
                        </div>
                    )
                    : (
                        <div>
                            <h4>{watchedShow.name}</h4>
                            <button onClick={this.toggleView}>Edit Name</button>
                        </div>
                    )}
                <button onClick={() => deleteFn(watchedShow.id)}>Release</button>
            </div>
        )
    }
}

export default Watched;