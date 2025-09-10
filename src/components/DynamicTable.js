import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaTrash } from "react-icons/fa";
import {IconButton, TextField, Box, Button, Stack} from "@mui/material";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useState, useEffect } from "react";

export default function DynamicTable({tableId, tableHeaders, tableBodies, handleEdit, handleDelete}) {
  // 🔹 Search state
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(tableBodies);

  // 🔹 Columns definition for DataGrid
  const columns = tableHeaders.map((header) => {
    if (header.isActionCol) {
      return {
        field: header.colKey,
        headerName: header.name,
        flex: 1,
        width: 150,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div className="flex gap-2">
            <IconButton
              color="primary"
              onClick={() => handleEdit(params.row)}
            >
              <FaEdit />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              <FaTrash />
            </IconButton>
          </div>
        ),
      };
    }

    return {
      field: header.colKey,
      headerName: header.name,
      width: header.width || 200,
      flex: 1, 
      sortable: true,
      filterable: true,
      renderCell: (params) => {
        // Custom StatusPill look
        if (header.setStatusPill) {
          return (
            <span
              className={`px-2 py-1 rounded-full text-white text-xs ${
                params.value === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {params.value}
            </span>
          );
        }
        return params.value;
      },
    };
  });

  // 🔹 Rows (must have id)
  const rows = tableBodies.map((row, index) => ({
    id: row.id || index + 1,
    ...row,
  }));

  // 🔹 Handle global search
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);

    if (!searchValue) {
      setFilteredRows(rows);
      return;
    }

    const lowercased = searchValue.toLowerCase();
    const filtered = rows.filter((row) =>
      Object.values(row).some(
        (val) =>
          val &&
          val.toString().toLowerCase().includes(lowercased)
      )
    );
    setFilteredRows(filtered);
  };

  // 🔹 Keep filteredRows updated when tableBodies changes
    useEffect(() => {
      setFilteredRows(rows);
    }, [tableBodies]);

  // 🔹 Export to CSV
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const csvBuffer = XLSX.write(workbook, {
      bookType: "csv",
      type: "array",
    });
    saveAs(
      new Blob([csvBuffer], { type: "text/csv;charset=utf-8;" }),
      "table_data.csv"
    );
  };

  // 🔹 Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAs(
      new Blob([excelBuffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      "table_data.xlsx"
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* 🔎 Toolbar */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => requestSearch(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="success"
            onClick={exportToCSV}
          >
            Export CSV
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={exportToExcel}
          >
            Export Excel
          </Button>
        </Stack>
      </Stack>

      {/* 🔹 DataGrid */}
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          disableSelectionOnClick
          filterMode="client"
          sortingMode="client"
          // checkboxSelection // ✅ Row selection
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f3f4f6",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </Box>
  );
}
