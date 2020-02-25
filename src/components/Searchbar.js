import React from 'react'


export default class Searchbar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit = e =>{
        e.preventDefault()
        console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment" style={{ marginTop: 30 }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <br/>
                        <input type="text" 
                        value={this.state.term}
                        onChange={e => {
                            this.setState({
                                term: e.target.value
                            })
                        }} />
                    </div>
                    <p>Image Found : {this.props.images.length}</p>
                </form>
            </div>
        )
    }
}