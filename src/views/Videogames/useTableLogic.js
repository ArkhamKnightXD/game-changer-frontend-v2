import {useState} from "react";

const useTableLogic = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleChangePage = (event, newPage) => {

        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {

        setRowsPerPage(event.target.value);

        setPage(0);
    };


    const descendingComparator = (a, b, orderBy) => {

        if (b[orderBy] < a[orderBy]) {

            return -1;
        }
        if (b[orderBy] > a[orderBy]) {

            return 1;
        }

        return 0;
    };


    const getComparator = (order, orderBy) => {

        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };


    return {page, rowsPerPage, handleChangeRowsPerPage, handleChangePage, getComparator};
};

export default useTableLogic;
