import React from 'react';
import '../App.css';

var registracijos = [];

class RegistrationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            vardas: '',
            pavarde: '',
            gimimoData: '',
            adresas: '',
            telefonas: ''
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
        this.setState({ id: this.state.id + 1 });
        const item = {
            id: this.state.id,
            vardas: this.state.vardas,
            pavarde: this.state.pavarde,
            gimimoData: this.state.gimimoData,
            adresas: this.state.adresas,
            telefonas: this.state.telefonas
        }
        registracijos.push(item)
    }

    render() {
        return (
            <><div className="container-fluid">

                <div style={{display: "flex", textAlign: "center"}} className="row">
                    <div className="col-12">
                        <img style={{
                            display: "flex", alignItems: "center",
                            textAlign: "center",
                            height: 200   
                        }} src='https://d.newsweek.com/en/full/1679597/pfizer-coronavirus-vaccine.jpg' alt='pfizer-coronavirus-vaccine.jpg' />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
                            Norėdami prisiregistruoti, įvesti savo kontaktinius duomenis. Taip pat pasirinkite vakciną ir registracijos vietą:</p>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Vardas</label>
                        <input type="text" className="form-control" id="vardas"
                            value={this.state.vardas} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Pavardė</label>
                        <input type="text" className="form-control" id="pavarde"
                            value={this.state.pavarde} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gimimo data</label>
                        <input type="text" className="form-control" id="gimimoData"
                            value={this.state.gimimoData} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Adresas</label>
                        <input type="text" className="form-control" id="adresas"
                            value={this.state.adresas} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefonas</label>
                        <input type="text" className="form-control" id="telefonas"
                            value={this.state.telefonas} onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Įvesti</button>
                </form>


            </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "paddingTop": "20px", "textAlign": "center", "fontWeight": "bold", "fontSize": "20px" }}>
                                Jūsų įvesti duomenys:</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            registracijos.map(fig => (
                                <div key={fig.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
                                    <div style={{ "textAlign": "left" }}>
                                        <h5>{fig.vardas} {fig.pavarde}</h5>
                                        <p>{fig.gimimoData}</p>
                                        <p>{fig.adresas}</p>
                                        <p>{fig.telefonas}</p>
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

export default RegistrationComponent;