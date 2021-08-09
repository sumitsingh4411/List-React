import React from 'react'
import { Paper, Typography, Avatar } from '@material-ui/core';
import './modal.css'

function Modal({ e }) {
    return (
        <Paper elevation={2} className="modal-container">
            <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar alt="Remy Sharp" src={e.img} style={{ width: 90, height: 90 }} />
            </Typography>
            <Typography>
                <Typography style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    marginTop: 10, flexDirection: 'column', padding: 20
                }}>
                    <Typography>char_id: {e.char_id}</Typography>
                    <Typography>Name: {e.name}</Typography>
                    <Typography>DOB: {e.birthday}</Typography>
                    <Typography>Category: {e.category}</Typography>
                    <Typography> Portrayed: {e.portrayed}</Typography>
                    <Typography>Status: {e.status}</Typography>
                    <Typography>NickName: {e.nickname}</Typography>
                </Typography>
            </Typography>
        </Paper>
    )
}

export default Modal
