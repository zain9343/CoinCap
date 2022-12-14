import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TableData from '../Table/Table';
import "./NavBar"
import Coincap from "./Coincap.png"
export default function ButtonAppBar() {
    return (
        <>
            <div style={{ position: "fixed" }}>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar >
                        <Toolbar style={{ backgroundColor: "black" }}>
                            <Typography variant="h6" component="div" style={{ marginRight: "3%" }} >
                                Coins
                            </Typography>
                            <Typography variant="h6" component="div" style={{ marginRight: "3%" }}>
                                Exchanges
                            </Typography>
                            <Typography variant="h6" component="div" style={{ marginRight: "3%" }} >
                                Swap
                            </Typography>
                            <div style={{ marginLeft: "20%" }}>
                                <img src={Coincap} width="100px"></img>
                            </div>

                            <SearchIcon style={{ marginLeft: "20%" }} ></SearchIcon>
                            <SettingsIcon style={{ marginLeft: "3%" }} ></SettingsIcon>
                            <Button variant="contained" color="success" style={{ marginLeft: "3%", border: "1px solid white", borderRadius: "23px" }} >
                                Connect Wallet
                            </Button>


                        </Toolbar>
                    </AppBar>
                </Box>
            </div>


            <div style={{ marginTop: "5%", backgroundImage: "linear-gradient(to right,#1E90FF,#E0FFFF)", height: "150px", display: "flex" }} >
                <h2 style={{ marginRight: "5%", marginLeft: "3%" }}>MARKET CAP</h2>
                <h2 style={{ marginRight: "5%" }}>EXCHANGE VOL</h2>
                <h2 style={{ marginRight: "5%" }}>ASSETS</h2>
                <h2 style={{ marginRight: "5%" }}>EXCHANGES</h2>
                <h2 style={{ marginRight: "5%" }}>MARKETS</h2>
                <h2 style={{ marginRight: "5%" }}>BTC DOM INDEX</h2>
            </div>
            <div>
                <TableData></TableData>
            </div>
        </>
    );
}
