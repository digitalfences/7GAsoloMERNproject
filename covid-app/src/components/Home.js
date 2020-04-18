import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
    state = {
        path: "https://pure-citadel-56709.herokuapp.com/",
        observations: [],
        requestString: ""
    }
    constructor() {
        super()
    }
    componentDidMount() {
        this.getObservations()
    }

    getObservations = async () => {
        const response = await fetch(this.state.path)
        const observations = await response.json()
        this.setState({
            observations
        })
    }
    render (){
        return(
        <div className="home">
            <div className="apiTextField">
                <TextField id="filled-basic" variant="filled" defaultValue={this.state.path} disabled></TextField>
                <TextField id="outline-basic" variant = "outlined" helperText="Please enter an API request here"></TextField>
            </div>
            <Typography component="div" variant="body1">
                <Box width="50vw" height="400px" component="div" whitespace="normal" overflow="auto" bgcolor="rgba(0,255,255,0.5)">
            
                </Box>
            </Typography>
            
        </div>)
    }
}
export default Home
