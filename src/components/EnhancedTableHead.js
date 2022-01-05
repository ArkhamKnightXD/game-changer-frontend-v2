import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {TableCell, TableSortLabel} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const headCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'developer',
        numeric: true,
        disablePadding: false,
        label: 'Developer',
    },
    //El id debe de ser igual que la propiedad que se envia desde el backend
    {
        id: 'gameModes',
        numeric: true,
        disablePadding: false,
        label: 'Game Modes',
    },
    {
        id: 'genre',
        numeric: true,
        disablePadding: false,
        label: 'Genre',
    },
    {
        id: 'rating',
        numeric: true,
        disablePadding: false,
        label: 'Rating',
    },
    {
        id: 'sellPrice',
        numeric: true,
        disablePadding: false,
        label: 'Price',
    },
    {
        id: 'stock',
        numeric: true,
        disablePadding: false,
        label: 'Stock',
    },
];


export default function EnhancedTableHead(props) {

    const { order, orderBy, onRequestSort } = props;


    const createSortHandler = (event, property) => {

        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={(event) => {createSortHandler(event, headCell.id)}}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {

    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};
