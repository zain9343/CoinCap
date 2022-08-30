import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./Table"


export default function TableData() {

    const [coinCap, setCoinCap] = useState([])
    const [limit, setLimit] = useState(50)

    useEffect(() => {

        fetch("https://api.coincap.io/v2/assets").then((res) => res.json()).then((data) => {

            setCoinCap(data.data)

        })

    }, [])
    const LoadMore = () => {

        setLimit((oldLimit) => oldLimit + 50)


    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 11,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <div className='tableContainer' style={{ width: "100%" }}>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Rank</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Market Cap</StyledTableCell>
                            <StyledTableCell>VWAP(24Hr)</StyledTableCell>
                            <StyledTableCell>Supply</StyledTableCell>
                            <StyledTableCell>Volume(24Hr)</StyledTableCell>
                            <StyledTableCell>Change(24Hr)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coinCap.slice(0, limit).map((row) => {
                            const images = "https://assets.coincap.io/assets/icons/" + row.symbol.toLowerCase() + "@2x.png"
                            return <StyledTableRow key={row.rank}>
                                <StyledTableCell component="th" scope="row">
                                    {row.rank}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <img src={images} width="50"></img>
                                    {row.id.charAt(0).toUpperCase() + row.id.substring(1)}<div style={{ marginLeft: '26%' }}>{row.symbol}</div>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${parseInt(row.priceUsd).toFixed(2)}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${parseInt(row.marketCapUsd).toFixed(2)}b
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${parseInt(row.vwap24Hr).toFixed(2)}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {parseInt(row.supply).toFixed(2)}m
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${parseInt(row.volumeUsd24Hr).toFixed(2)}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {parseInt(row.changePercent24Hr).toFixed(2)}%
                                </StyledTableCell>
                            </StyledTableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ marginTop: "1%", marginBottom: "1%" }}>
                <Button variant="contained" color="success" onClick={LoadMore}>
                    View More
                </Button>
            </div>
        </div >
    )
}
