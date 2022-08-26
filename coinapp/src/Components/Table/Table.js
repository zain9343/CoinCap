import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./Table"


export default function TableData() {

    const [coinCap, setCoinCap] = useState([])

    useEffect(() => {

        fetch("https://api.coincap.io/v2/assets").then((res) => res.json()).then((data) => {

            setCoinCap(data.data)

        })

    }, [])
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
                        {coinCap.map((row) => {
                            return <StyledTableRow key={row.rank}>
                                <StyledTableCell component="th" scope="row">
                                    {row.rank}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}<div>{row.symbol}</div>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${row.priceUsd}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${row.marketCapUsd}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${row.vwap24Hr}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.supply}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    ${row.volumeUsd24Hr}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.changePercent24Hr}
                                </StyledTableCell>

                            </StyledTableRow>

                        })}
                    </TableBody>
                </Table>



            </TableContainer>
        </div>
    )
}
