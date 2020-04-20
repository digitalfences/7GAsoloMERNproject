import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Edit.css";

class Edit extends Component {
    state = {
        path: "https://pure-citadel-56709.herokuapp.com/",
        requestString: "",
        body: ""
    }
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({
            requestString: event.target.value
        })
    }
    bodyHandler = (event) => {
        this.setState({
            body: `${event.target.value}`
        })
    }
    create = async () => {
        console.log('creating');
        console.log(this.state.body);
        console.log(JSON.parse(this.state.body));
        fetch('https://pure-citadel-56709.herokuapp.com/', {
            method: 'POST',
            body: this.state.body,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(res => console.log(res))
    }
    update = async () => {
        console.log('updating');
        fetch(this.state.path, {
            method: 'PUT',
            body: this.state.body,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(res => console.log(res))
    }
    delete = async () => {
        console.log('deleting');
        fetch(this.state.path, {
            method: 'DELETE',
            body: this.state.body,
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(res => console.log(res))
    }
    //{"SNo": 100000, "ObservationDate": "01/02/2020","ProvinceState": "GalenLand","CountryRegion": "GalenTopia", "LastUpdate": "2020-04-14 23:41:11","Confirmed": 1000, "Deaths": 500,"Recovered": 500}
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            path: "https://pure-citadel-56709.herokuapp.com/" + this.state.requestString,
        })
        if (this.props.create) {
            this.create()
        }
        else if (this.props.update) {
            this.update();
        }
        else if (this.props.delete) {
            this.delete();
        }
        else {
            console.log("error");
        }
    }
    render() {
        return (
            <div className="edit">
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
                        <TextField
                            onChange={this.bodyHandler}
                            fullWidth
                            style={{ margin: '2.5%' }}
                            id="request-form"
                            label="Request Body"
                            multiline
                            rows={20}
                            placeholder="{SNo: Number,
                              ObservationDate: String,
                              ProvinceState: String,
                              CountryRegion: String,
                              LastUpdate: String,
                              Confirmed: Number,
                              Deaths: Number,
                              Recovered: Number;}"
                            variant="outlined"
                        ></TextField>/>
                    </Box>

                </Typography>
            </div>)
    }
}
export default Edit