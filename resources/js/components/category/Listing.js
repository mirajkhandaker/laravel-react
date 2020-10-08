import React, { Component } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import {Link} from 'react-router-dom';

export default class Listing extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:5,
            serial:0
        };

        this.handaleDelete = this.handaleDelete.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

componentDidMount(){
    this.getBlogs();
}

    getBlogs(currentPage = 1){
        axios.get(`http://localhost/m/laravel-react/api/blogs?page=${currentPage}`)
            .then(response => {
                this.setState({
                    categories: response.data.data,
                    activePage:response.data.current_page,
                    itemsCountPerPage:response.data.per_page,
                    totalItemsCount:response.data.total,
                    serial: (response.data.current_page-1) * response.data.per_page +1
                });

            });
    }

    handlePageChange(pageNumber) {
        this.getBlogs(pageNumber);
    }

    handaleDelete(category_id){

        axios.delete('http://localhost/m/laravel-react/api/blogs/delete/'+category_id)
            .then(res => {
                this.getBlogs();
                // var categoryD = [this.state.categories];
                // for(var i =0; i<categoryD.length; i++){
                //     if (categoryD[i].id === category_id){
                //         categoryD.splice(i,1);
                //         this.setState({categories:categoryD})
                //     }
                // }
                // categoryD.splice(category_id,1);
                // this.setState({categories:categoryD})
                // });
            });
    }

    render(){
        return (
            <div className="mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.categories.map(category => {
                        return(
                            <tr key={category.id}>
                                <td>{this.state.serial++}</td>
                                <td>{category.title}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                                <td>
                                    <Link className="btn btn-warning btn-sm" to={'/category/edit/'+category.id}>Edit</Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => {this.handaleDelete(category.id)}}>Delete</button>
                                </td>
                            </tr>
                        );
                    })
                    }
                    </tbody>
                </table>

                <div>
                    <Pagination

                        innerClass='pagination justify-content-center'
                        activeClass='active'
                        itemClass='page-item'
                        disabledClass='disabled'
                        linkClass='page-link'
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                    />
                </div>

            </div>
        )
    }
}
