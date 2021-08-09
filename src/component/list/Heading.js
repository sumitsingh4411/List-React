import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import './index.css';


function Heading() {
    return (
        <Paper elevation={2} style={{ width: '90%', marginTop:10, backgroundColor:'#00796b',
         padding:20, color:'white' , marginBottom:20 , fontWeight:'bolder'}}>
            <Typography style={{
                display: 'flex', alignItems: 'center',
            }}>
                <Typography className="column">
                    Index
                </Typography>
                <Typography className="column" style={{marginLeft:10}}>
                    Name
                </Typography>
                <Typography className="column extra">
                    Occupation
                </Typography>
                <Typography className="column left-margin" style={{ marginLeft: 20 }}>
                    DOB
                </Typography>
                <Typography className="column">
                    Status
                </Typography>
            </Typography>
        </Paper>
    )
}

export default Heading;
