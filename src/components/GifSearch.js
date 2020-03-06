import React from 'react'

class GifSearch extends React.Component {

    state = {
        query: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value="{this.state.query}" 
                    onChange={e => this.setState({
                        query: e.target.value 
                    })}></input>
                </form>
            </div>
        )
    }
}

