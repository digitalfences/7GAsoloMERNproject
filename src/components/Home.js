import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './Home.css';

class Home extends Component {
    state = {
        path: "https://mernbackend-covid.herokuapp.com/",
        observations: null,
        requestString: "",
        update: true
    }
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
    }
    shouldComponentUpdate(){
        return this.state.update;
    }
    logState = () => console.log(this.state);

    getObservations = async () => {
        const response = await fetch(this.state.path)
        const observationsArray = await response.json();
        this.setState({
            observations: observationsArray
        }, this.logState);    
    }
    onChange = (event) => {
        this.setState({
            update: false,
            requestString: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            observations: null,
            path: this.state.path + this.state.requestString,
            update: true
        })
    }
    render() {
        let array;
        if (!this.state.observations){
            array = <p className="loader">&nbsp;&nbsp;&nbsp;&nbsp;Loading...</p>;
            this.getObservations();
        }
        else {
            array = this.state.observations.map((observation,observationNum) => {
               observationNum = observation.SNo
               return(<div key={observationNum}>
                    <p>&nbsp;&nbsp;[</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Serial:&nbsp;&nbsp;{observation.SNo} </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Observation Date:&nbsp;&nbsp;{observation.ObservationDate}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Province or State:&nbsp;&nbsp;{observation.ProvinceState}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Country or Region:&nbsp;&nbsp;{observation.CountryRegion}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Last Update:&nbsp;&nbsp;{observation.LastUpdate}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Confirmed Cases:&nbsp;&nbsp;{observation.Confirmed}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Dead:&nbsp;&nbsp;{observation.Deaths}</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Recovered:&nbsp;&nbsp;{observation.Recovered}</p>
                    <p>&nbsp;&nbsp;]</p>
                </div>)
            })
        }
        return (
            <div className="home">
                <div className='requestTypeButtons'>
                        <Button component={Link} to="/">Read</Button>
                        <Button component={Link} to="/edit/create">Create</Button>
                        <Button component={Link} to='/edit/update'>Update</Button>
                        <Button component={Link} to='/edit/delete'>Delete</Button>
                </div>
                <form onSubmit={this.onSubmit} className="apiTextField" width="50vw">
                    
                    <div className="fieldContainer">
                    <div className="filled-basic">
                    <TextField fullWidth id="filled-basic" variant="filled" defaultValue={this.state.path} disabled></TextField>
                    </div>
                    <div className="outlined-basic">
                        <TextField fullWidth id="outline-basic" variant="outlined" helperText="Please enter an API request here" onChange={this.onChange}></TextField>
                    </div>
                    </div>
                    <div className="buttonContainer">
                        <Button id="buttonSubmit" type="submit" variant="contained" fullWidth>Submit</Button>
                    </div>
                    
                </form>
                <Typography component="div" variant="body1">
                    <Box width="50vw" height="400px" component="div" whitespace="normal" overflow="auto" bgcolor="rgba(0,180,255,0.5)">
                        {array}
                    </Box>
                </Typography>

            </div>)
    }
}
export default Home
