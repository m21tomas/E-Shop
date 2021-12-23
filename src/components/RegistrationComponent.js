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
            telefonas: '',
            centras: '',
            vakcina: ''
        };
    }

    centrasChange = e => {
        const valueSelectedByUser = parseInt(e.target.value)
        this.setState({ centras: valueSelectedByUser });
    }

    vakcinaChange = e => {
        const valueSelectedByUser = parseInt(e.target.value)
        this.setState({ vakcina: valueSelectedByUser });
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
            telefonas: this.state.telefonas,
            centras: this.state.centras,
            vakcina: this.state.vakcina
        }
        registracijos.push(item)
    }

    render() {
        return (
            <><div className="container-fluid">

                <div style={{ display: "flex", textAlign: "center" }} className="row">
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

                    <div className="mb-3">
                        <label className="form-label">Vakcinacijos centras</label>
                        <select class="form-select" id="vakcGroup01" onChange={this.centrasChange}>
                            <option selected>pasirinkti vakcinavimo centrą...</option>
                            <option value="1">LITEXPO, Laisvės pr. 5</option>
                            <option value="2">Šeškinės poliklinika, Šeškinės g. 24</option>
                            <option value="3">Benu vaistinė, Kedrų g.4</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Vakcina</label>
                        <select class="form-select" id="vakcGroup02" onChange={this.vakcinaChange}>
                            <option selected>pasirinkti vakciną...</option>
                            <option value="1">Moderna (Spikevax)</option>
                            <option value="2">Pfizer–BioNTech (Comirnaty)</option>
                            <option value="3">Oxford–AstraZeneca (Vaxzevria)</option>
                            <option value="4">Johnson-'n'-Johnson (Janssen)</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Įvesti</button>
                </form>


            </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p style={{ "paddingTop": "20px", "textAlign": "left", "fontWeight": "bold", "fontSize": "20px" }}>
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
                                        <p>{fig.centras}</p>
                                        <p>{fig.vakcina}</p>
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