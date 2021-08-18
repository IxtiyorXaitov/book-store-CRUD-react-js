import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Service from '../service/service'


class Book extends Component {

    state = {
        page: 0,
        size: 10,
        items: [],
        totalElements: 0,
        totalPages: 0
    }

    componentDidMount() {
        this.getBookList();
    }


    getBookList = () => {
        let page = this.state.page;
        let size = this.state.size;
        Service.getAllBook(page, size).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({
                    items: res.data.object,
                    totalElements: res.data.totalElements,
                    totalPages: res.data.totalPages
                })
            }
        })
    }

    render() {
        return (
            <div>


                <div className="container">
                    <h1 className="text-center my-3">Book list</h1>
                    <div className="row">
                        {
                            this.state.items.map((item, index) =>
                                <div key={index} className="col-6">
                                    <div className="book row">
                                        <div className="col-6">
                                            <img className="book-img" src="https://assets.asahiy.uz/product/items/desktop/67ec123fb3fdb2efd555e340b2d5a6722021042419121116334mFshsWRLkA.jpg" alt=""/>
                                        </div>
                                        <div className="col-6">
                                            <h5> Author: {item.author}</h5>
                                            <h5> Name: {item.name}</h5>
                                            <p> Page Count: {item.pageCount}</p>
                                            <p> Published Date: {item.publishedDate}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Book.propTypes = {};

export default Book;