import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchResults from '../../viewPages/searchResults/SearchResults';
import ProductDetail from '../../viewPages/productDetail/ProductDetail';
import Header from '../header/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    onSearchHandler(query) {
        this.props.history.push(`/items?q=${query}`);
    }
   
    render() {
        return (
            <div >
                <Header onSearch={this.onSearchHandler} />
                <main>
                    <Switch>
                        <Route exact path='/items' render={(props) => <SearchResults {...props} />} />
                        <Route exact path='/items/:id' render={(props) => <ProductDetail {...props} />} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;