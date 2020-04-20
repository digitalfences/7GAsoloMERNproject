import React from "react";
import {Link} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant = "h3" color="inherit">
                        <Button component={Link} to='/'>Covid API</Button>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default NavBar;