import React, { Component } from 'react'
import axios from 'axios';
export default class Add extends Component {

    constructor(){
        super();

        this.state = {
            categoryName:''
        };

        this.handelerCategoryName = this.handelerCategoryName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handelerCategoryName(event){
        this.setState({
            categoryName: event.target.value
        });
    }

    handleSubmit(event){
            event.preventDefault();
            const category = {
                category_name: this.state.categoryName
            };
        axios.post('http://localhost/m/laravel-react/api/blogs/store',category)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <div className="mt-2">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Category Name</label>
                        <input type="text" value={this.state.categoryName} onChange={this.handelerCategoryName} className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
