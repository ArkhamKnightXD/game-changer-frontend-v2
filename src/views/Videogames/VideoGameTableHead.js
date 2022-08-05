import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableCell, TableSortLabel} from "@mui/material";
import PropTypes from "prop-types";

export default function VideoGameTableHead({ order, orderBy, onRequestSort, headCells}) {

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

    headCells: PropTypes.array.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired
};
