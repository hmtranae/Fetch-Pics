import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    // The arrow function bypasses the problem of this in the keyword function by automatically binding the value of this for all the code inside the function
    onFormSubmit = (e) => {
        e.preventDefault();
        // Arrow function makes this always equal to the instance of the SearchBar
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={(e) => {this.setState({ term : e.target.value })}}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
