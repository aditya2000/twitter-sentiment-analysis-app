import React, { Component } from 'react';
import './body.css'

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      loading: true,
      data: []
    }
  }

  handleChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/sentiment-analysis/${this.state.searchTerm}`)
    .then(res => res.json())
    .then(data => {
        this.setState({
          loading:false,
          data: data,
        })
    })
  }
  render() {
    const data = this.state.data;
    return(
      <div className="body">
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <input placeholder="Analyse some topic" onChange={this.handleChange} value={this.state.searchTerm} className="body-input"/>
            <button className="input-button">Submit</button>
          </form>
        </div>
        {data.map(data_term => <div key={Math.random()} className="tweet-analysis">
                                  <h4>{data_term.text}</h4>
                                  <p>Score: {data_term.analysis.score}</p>
                                  <p>Comparative: {data_term.analysis.comparative}</p>
                               </div>)}
      </div>
    )
  }
}


export default Body;
