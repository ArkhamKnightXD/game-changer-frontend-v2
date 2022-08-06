import {TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import PropTypes from "prop-types";

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
    {
        id: 'options',
        numeric: false,
        disablePadding: false,
        label: 'Options',
    },
];

export default function VideoGameTableHead({ order, orderBy, onRequestSort}) {

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

VideoGameTableHead.propTypes = {

    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired
};
