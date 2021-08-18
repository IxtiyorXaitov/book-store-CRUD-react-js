import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Book from './pages/Book'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Book}/>
                    <Route path="/add" component={AddBook}/>
                    <Route path="/book/:id" component={EditBook}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
