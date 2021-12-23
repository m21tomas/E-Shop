import React from 'react'
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

// var centrai =[{"id":1,"pavad":"LITEXPO","image":"https://www.lrt.lt/img/2021/03/31/864531-384520-1287x836.jpg","adresas":"Laisvės pr. 5","vakcinos":2000,"registrcijos":10},
//               {"id":2,"pavad":"Šeškinės poliklinika","image":"https://madeinvilnius.lt/wp-content/uploads/2020/03/seskines-poliklinika-5c9bb3ab6a6bd.jpg","adresas":"Šeškinės g. 24","vakcinos":20,"registrcijos":5},
//               {"id":3,"pavad":"Benu vaistinė","image":"https://www.mega.lt/uploads/media/default/0001/06/288fed4a3b87e8c57ff6d9d4e15cedce8692ba43.jpeg","adresas":"Kedrų g.4","vakcinos":10,"registrcijos":7},
//              ];


class PradinisCentrai extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {centrai: [{"id":1,"pavad":"LITEXPO","image":"https://www.lrt.lt/img/2021/03/31/864531-384520-1287x836.jpg","adresas":"Laisvės pr. 5","vakcinos":2000,"registrcijos":10},
        {"id":2,"pavad":"Šeškinės poliklinika","image":"https://madeinvilnius.lt/wp-content/uploads/2020/03/seskines-poliklinika-5c9bb3ab6a6bd.jpg","adresas":"Šeškinės g. 24","vakcinos":20,"registrcijos":5},
        {"id":3,"pavad":"Benu vaistinė","image":"https://www.mega.lt/uploads/media/default/0001/06/288fed4a3b87e8c57ff6d9d4e15cedce8692ba43.jpeg","adresas":"Kedrų g.4","vakcinos":10,"registrcijos":7},
       ]};
    }

    // componentDidMount() {
    //     axios.get('https://itpro2017.herokuapp.com/api/products')
    //     .then(response => {
    //         console.log(response);
    //         const HerokuItems = response.data;
    //         this.setState({ HerokuItems });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };
   
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px" }}>
                            Vakcinacijos centrai:</p>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.centrai.map(fig => (
                            <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4 py-2">
                                <div style={{ "textAlign": "left" }} className="card">
                                    <img
                                        src={fig.image}
                                        className="card-img-top"
                                        alt={fig.id} />
                                    <h5 className="card-title">{fig.pavad}</h5>
                                    <p className="card-text">{fig.adresas}</p>
                                    <p className="card-text">Vakcinų skaičius: {fig.vakcinos}</p>
                                    <p className="card-text">Registracijų skaičius: {fig.registrcijos}</p>
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

export default PradinisCentrai;