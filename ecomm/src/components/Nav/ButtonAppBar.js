import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
    return (
        <Box sx={{
            flexGrow: 1,
            boxShadow: 1,
            color: 'primary.main'
        }}>
            <AppBar position="static" color='default'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My new store
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Test</Button>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
