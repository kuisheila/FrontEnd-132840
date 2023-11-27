import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,Button } from '@mui/material';
import call from '../../../core/services/http';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
 

const ChildrensTable = () => {
    const [childrenHomes, setChildrenHomes] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        getChildrenHomes();
    }, []);
  
    const getChildrenHomes = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found.');
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const res = await call('get', '/childrens_home/api/v1/childrens_home/', { headers });

            if (res.data && res.data.length > 0) {
                setChildrenHomes(res.data);
            } else {
                console.error('API returned an empty or unsuccessful response.');
            }
        } catch (error) {
            console.error('Error fetching children homes:', error);
        }
    };

    const handleDelete = (id) => {
        // Add logic to handle delete action here
        console.log(`Delete button clicked for ID ${id}`);
    };

    const handleEdit = (id) => {
        // Add logic to handle edit action here
        navigate(`/single-home/${id}`);
        console.log(`Edit button clicked for ID ${id}`);
    };
 

    const handleCreateHome = () => {
        navigate('/add-home'); // Replace with the actual path
    };

    return (
        <div>
        <div style={{ textAlign: 'right' }}>
            <Button variant="outlined" style={{ color: 'red', marginTop: '10px' }} onClick={handleCreateHome}>Add A Home</Button>
        </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Capacity</TableCell>
                            <TableCell>Director Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Established Date</TableCell>
                            <TableCell>Certification Number</TableCell>
                            <TableCell>Actions</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {childrenHomes.map(home => (
                            <TableRow key={home.id}>
                                <TableCell>{home.name}</TableCell>
                                <TableCell>{home.address}</TableCell>
                                <TableCell>{home.capacity}</TableCell>
                                <TableCell>{home.director_name}</TableCell>
                                <TableCell>{home.contact_number}</TableCell>
                                <TableCell>{home.email}</TableCell>
                                <TableCell>{home.established_date}</TableCell>
                                <TableCell>{home.certification_number}</TableCell>
                                <TableCell>
                                    <IconButton color="primary"  onClick={() => handleEdit(home.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDelete(home.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ChildrensTable;