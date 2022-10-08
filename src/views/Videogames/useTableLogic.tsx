import {useState} from "react";

interface VideoGame {
    id: number;
    name: string;
    developer: string;
    gameModes: string;
    genre: string;
    rating: number;
    sellPrice: number;
    stock: number;
}

//Todo remover todos los any cuando sepa el tipo de dato.
const useTableLogic = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleChangePage = (event: any, newPage: number) => {

        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event: any) => {

        setRowsPerPage(event.target.value);

        setPage(0);
    };


    const descendingComparator = (a: any, b: any, orderBy: string): number => {

        if (b[orderBy] < a[orderBy]) {

            return -1;
        }
        if (b[orderBy] > a[orderBy]) {

            return 1;
        }

        return 0;
    };


    const getComparator = (order: string, orderBy: string) => {

        return order === 'desc'
            ? (a:VideoGame, b: VideoGame) => descendingComparator(a, b, orderBy)
            : (a:VideoGame, b: VideoGame) => -descendingComparator(a, b, orderBy);
    };


    return {page, rowsPerPage, handleChangeRowsPerPage, handleChangePage, getComparator};
};

export default useTableLogic;
