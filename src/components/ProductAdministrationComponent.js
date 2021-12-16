import React from 'react';
import '../App.css';

class ProductAdministrationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
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
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        this.setState({ value: 'reset after submit' });
        event.preventDefault();

    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                            Please fill the form to enter new product to the shop:</p>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <p className='formLabel'>Title:</p>
                    <input className="mx-2" type="text" value={this.state.title}
                        onChange={this.handleChange} name="title" />
                    <br />
                    <input type="submit" value="Save" />
                </form>
            </div>

        );
    }
}

export default ProductAdministrationComponent;