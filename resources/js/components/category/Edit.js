import React, { Component } from 'react'
import axios from 'axios';
export default class Edit extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            categoryName:''
        };

        this.handelerCategoryName = this.handelerCategoryName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get(`http://localhost/m/laravel-react/api/blogs/edit/${this.state.id}`)
            .then(response => {
                this.setState({
                    categoryName:response.data.title
                });
            });
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
        axios.put(`http://localhost/m/laravel-react/api/blogs/update/${this.state.id}`,category)
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
