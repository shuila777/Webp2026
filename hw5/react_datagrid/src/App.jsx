import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');

  const openUrl =
    'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

  useEffect(() => {
    fetch(openUrl)
      .then((response) => response.json())
      .then((data) => {
        const newRows = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location:
            item.showInfo && item.showInfo[0]
              ? item.showInfo[0].location
              : '無地點資訊',
        }));

        setRows(newRows);
      })
      .catch((error) => {
        console.log('API 錯誤：', error);
      });
  }, []);

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      field: 'title',
      headerName: '名稱',
      flex: 1,
    },
    {
      field: 'location',
      headerName: '地點',
      flex: 1,
    },
  ];

  return (
    <Box className="page">
      <Box className="header">
        <Typography variant="h4" fontWeight="bold">
          景點觀光展覽資訊
        </Typography>

        <TextField
          label="搜尋名稱"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ width: 300 }}
        />
      </Box>

      <Paper elevation={3} sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </Paper>
    </Box>
  );
}

export default App;