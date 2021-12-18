import React from 'react'
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {HerokuItems: []};
    }
    // state = {
    //     HerokuItems: []
    // }

    componentDidMount() {
        axios.get('https://itpro2017.herokuapp.com/api/products')
        .then(response => {
            console.log(response);
            const HerokuItems = response.data;
            this.setState({ HerokuItems });
        })
        .catch((error) => {
            console.log(error);
        });
    };
   
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px" }}>
                            We have these products:</p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.HerokuItems.map(fig => (
                            <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4 py-2">
                                <div style={{ "textAlign": "center" }} className="card">
                                    <img
                                        src="https://itpro2017.herokuapp.com/samsung.jpg" //{fig.image}
                                        className="card-img-top"
                                        alt={fig.id} />
                                    <h5 className="card-title">{fig.title}</h5>
                                    <p className="card-text">{fig.description}</p>
                                    <p className="card-text">Price: {fig.price}</p>
                                    <p className="card-text">Quantity: {fig.quantity}</p>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }

}

export default Home;