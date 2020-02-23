import React from 'react'

export default class Searchbar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit(e){
        e.preventDefault()
    }

    render() {
        return (
            <div className="ui segment" style={{ marginTop: 30 }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={e => {
                            this.setState({
                                term: e.target.value
                            })
                        }} />
                    </div>
                </form>
            </div>
        )
    }
}