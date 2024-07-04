import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <Box sx={{ height: 550, width: '95%', margin: '0 auto' }}>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
        Posts
      </Typography>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <DataGrid 
          rows={posts} 
          columns={columns} 
          pageSizeOptions={[10]} 
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
        />
      )}
    </Box>
  );
};

export default PostTable;
