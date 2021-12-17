import React from 'react';
import '../App.css';

var Items = [];

class ProductAdministrationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            title: '',
            imageUrl: '',
            description: '',
            price: '',
            quantity: ''
        };
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ id: this.state.id + 1});
        const item = {
            id: this.state.id,
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity
        }

        Items.push(item);

        // return(
        // <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        //     <div style={{ "textAlign": "center" }} className="card">
        //         <img
        //             src={this.state.imageUrl}
        //             className="card-img-top"
        //             alt={"..."}
        //         />
        //         <h5 className="card-title">{this.state.title}</h5>
        //         <p className="card-text">{this.state.description}</p>
        //         <p className="card-text">Price: {this.state.price}</p>
        //         <p className="card-text">Quantity: {this.state.quantity}</p>
        //     </div>
        // </div>
        
    }

    render() {
        return (
            <><div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                            Please fill out the form to enter new product to the shop:</p>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" id="title"
                            value={this.state.title} onChange={this.handleChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" id="description"
                            value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" id="imageUrl"
                            value={this.state.imageUrl} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" id="price"
                            value={this.state.price} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity"
                            value={this.state.quantity} onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>

                {/* <form onSubmit={this.handleSubmit}>
        <p className='formLabel'>Title:</p>
        <input className="mx-2" type="text" value={this.state.title}
            onChange={this.handleChange} name="title" />
        <br />
        <input type="submit" value="Save" />
    </form> */}
            
            </div>
            
            <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px" }}>
                                We have these products:</p>
                        </div>
                    </div>
                    <div className="row">
                    {
                        Items.map(fig => (
                        <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div style={{ "textAlign": "center" }} className="card">
                                <img
                                    src={fig.imageUrl}
                                    className="card-img-top"
                                    alt={fig.id} />
                                <h5 className="card-title">{fig.title}</h5>
                                <p className="card-text">{fig.description}</p>
                                <p className="card-text">Price: {fig.price}</p>
                                <p className="card-text">Quantity: {fig.quantity}</p>
                            </div>
                        </div>
                        ))
                    }
                    </div>
            </div>
            
        </> 

        );
    }
}

export default ProductAdministrationComponent;