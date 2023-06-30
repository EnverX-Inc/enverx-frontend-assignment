import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteTxn from "../components/DeleteTxn";
import EditTxn from "../components/EditTxn";
import { GET_TRANSACTIONS } from "../store/actions";

export default function Transactions() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch({
      type: GET_TRANSACTIONS,
    });
  }, []);

  const columns = [
    { field: "amount", headerName: "Amount", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Stack direction={"row"} alignItems="center">
          <EditTxn form={params.row} />
          <DeleteTxn id={params.row.id} />
        </Stack>
      ),
    },
  ];
  return (
    <Box mt={2}>
      <Typography variant="h4" mb={1}>
        All Transactions
      </Typography>
      <DataGrid
        getRowId={(row) => row?.id}
        rows={list ?? []}
        columns={columns}
        // disableColumnMenu
        // hideFooter
        //loading={loading}
        // rowSelectionModel={selectionModel}
        // onRowClick={handleRowClick}
      />
    </Box>
  );
}
