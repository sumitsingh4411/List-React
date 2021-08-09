import React, { useEffect } from 'react'
import { Select, FormControl, MenuItem, InputLabel, TextField } from '@material-ui/core';
import './filter.css';

function Filter({ findname, findfilter }) {

    const [find, setfind] = React.useState(null);
    const [sel, setsel] = React.useState(null);
    useEffect(() => {
        findname(find);
        console.log(sel)
        findfilter(sel);
    },[find, sel]);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 10 }}>
            <TextField id="outlined-basic" label="Search" variant="outlined"
                style={{ margin: 15 }} onChange={e => setfind(e.target.value)} value={find}
                required />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 10 }}>
                <FormControl variant="outlined" style={{ padding: 10, width: 200 }} >
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sel}
                        onChange={(e) => setsel(e.target.value)}
                        outlined
                    >
                        <MenuItem value='Better Call Saul'>Better Call Saul</MenuItem>
                        <MenuItem value='Breaking Bad'>Breaking Bad</MenuItem>
                        <MenuItem value='Breaking Bad, Better Call Saul'>Breaking Bad, Better Call Saul</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Filter
