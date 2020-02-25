import React from 'react'
import axios from 'axios'
import Searchbar from './Searchbar'
import ImageList from './ImageList'


export default class App extends React.Component {

    state = {
        images: [],
        loading: true
    }

    onSearchSubmit = term => {
        setTimeout(() => {
            console.log(term)
            axios.get('https://api.unsplash.com/search/photos?query=' + term, {
                headers: {
                    Authorization:
                        'Client-ID R1I0wt-zn35awzq1mSg1T1MSvbKRtXX13CfP1zjyz_c'
                }
            }).then(response => {
                this.setState({
                    images: response.data.results,
                    loading : false
                })
                console.log(this.state.images)
            })
        }, 3000)
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar images={this.state.images} onSubmit={this.onSearchSubmit} />
                <ImageList loading={this.state.loading} images={this.state.images} />
            </div>
        )
    }
}
