import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            shows: []
        }
        
    }
    
    async componentDidMount() {
        const response = await axios.get('/api/shows')
        const shows = response.data
   
        this.setState({shows})
    }
    
    render() {
        const shows = this.state.shows
        console.log(shows)
        return (
            <div>
             <h2> I like { shows.length } shows! </h2>
            <ul> 
                {
                    shows.map(show => <li key={show.id}> {show.name} </li>
                    
                )}
            
            </ul>
            </div>
            )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))