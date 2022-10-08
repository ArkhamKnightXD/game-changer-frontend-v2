import {TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";

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
    //Él, id debe de ser igual que la propiedad que se envía desde el backend.
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

interface VideoGameTableHeadProps {
    order: any;
    orderBy: any;
    onRequestSort: (event: any, property:string) => void;
}

export default function VideoGameTableHead({ order, orderBy, onRequestSort}: VideoGameTableHeadProps) {

    const createSortHandler = (event: any, property: string) => {

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
                            onClick={(event) =>
                            {createSortHandler(event, headCell.id)}}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
