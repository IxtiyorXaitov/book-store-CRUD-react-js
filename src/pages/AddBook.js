import React, {Component} from 'react';
import Service from '../service/service'

class AddBook extends Component {

    state = {
        name: null,
        publishedDate: null,
        author: null,
        pageCount: null,
        success: false,
        message: null
    }


    handleChangeName = (e) => {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    handleChangePublishedDate = (e) => {
        this.setState(
            {
                publishedDate: e.target.value
            }
        )
    }

    handleChangeAuthor = (e) => {
        this.setState(
            {
                author: e.target.value
            }
        )
    }

    handleChangePageCount = (e) => {
        this.setState(
            {
                pageCount: e.target.value
            }
        )
    }

    goToHome = () => {
        this.props.history.push('/')
    }

    saveBook = () => {

        let author = this.state.author;
        let name = this.state.name;
        let pageCount = this.state.pageCount;
        let publishedDate = this.state.publishedDate;

        let obj = {
            author: author,
            name: name,
            pageCount: pageCount,
            publishedDate: publishedDate
        }

        if (author && name && pageCount && publishedDate) {
            Service.createBook(obj).then(res => {
                if (res.status === 201) {
                    this.setState({
                        success: true,
                        message: res.data.message
                    })
                }
            }).catch(err => {
                if (err.response) {
                    this.setState({
                        success: false,
                        message: err.response.data.message ? err.response.data.message : "Error saving. Please try again"
                    })
                }
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-12 mt-5">
                        <h1>Add book</h1>

                        {
                            this.state.message ?
                                <div className={this.state.success ? "success message" : "error message"}>
                                    {
                                        this.state.message
                                    }
                                </div>
                                :
                                ""
                        }

                        <label className="mt-4" htmlFor="name">
                            Enter name of book
                        </label>
                        <input onChange={this.handleChangeName} className="input-group" type="text"
                               id="name"/>

                        <label className="mt-4" htmlFor="publishedDate">
                            Enter published date
                        </label>
                        <input onChange={this.handleChangePublishedDate} className="input-group" type="text"
                               id="publishedDate"/>

                        <label className="mt-4" htmlFor="author">
                            Enter author
                        </label>
                        <input onChange={this.handleChangeAuthor} className="input-group" type="text"
                               id="author"/>

                        <label className="mt-4" htmlFor="pageCount">
                            Enter page count
                        </label>
                        <input onChange={this.handleChangePageCount} className="input-group" type="number"
                               id="pageCount"/>
                        <div className="mt-4">
                            <button
                                className="float-start btn btn-danger"
                                onClick={this.goToHome}
                            >
                                Cancel
                            </button>
                            <button
                                className="float-end btn btn-primary"
                                onClick={this.saveBook}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddBook.propTypes = {};

export default AddBook;