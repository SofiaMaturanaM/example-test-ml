import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    componentWillReceiveProps({ query }) {
        if (query) {
            this.setState({ query })
        }
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }
    onChangeHandler(e) {
        this.setState({ query: e.currentTarget.value });
    }
    render() {
        return (
            <form  onSubmit={this.onSubmitHandler} role="search">
                <input onChange={this.onChangeHandler} value={this.state.query} tabIndex="1" type="text" maxLength="100" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoFocus placeholder="Nunca dejes de buscar" autoComplete="off" />
                <button type="submit" ><i >Buscar</i></button>
            </form>
        );
    }
}

export default SearchBox;