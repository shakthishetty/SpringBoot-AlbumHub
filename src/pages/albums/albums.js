import React, {useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent } from '@mui/material';
import { useEffect } from 'react';
import {fetchGetDataWithAuth} from 'client/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const brightPopColors = [
  '#FF3E4D', '#FF5635', '#FFAB00', '#36B37E', '#00B8D9', '#0052CC', '#253858', '#0067B1',
  '#004B8D', '#9C27B0', '#E91E63', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
  '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722',
  '#795548', '#9E9E9E', '#607D8B', '#F44336', '#E57373', '#FFCDD2', '#64B5F6', '#4FC3F7',
  '#BBDEFB', '#81C784', '#C8E6C9', '#DCE775', '#FFF176', '#FFD54F', '#FFB74D', '#FF8A65',
  '#A1887F', '#E0E0E0', '#90A4AE', '#FF4081', '#FF80AB', '#F50057', '#651FFF', '#3D5AFE',
  '#2979FF', '#00B0FF', '#00E5FF',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * brightPopColors.length);
  return brightPopColors[randomIndex];
};

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: getRandomColor(),
    textAlign: 'center',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    height: '250px', // Increase the height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',    
  }
}));



const DynamicGridPage = () => {
  const [dataArray, setDataArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      const isLoggedIn = localStorage.getItem('token');
      if (!isLoggedIn) {
        navigate('/login');
        window.location.reload()
      }
      fetchGetDataWithAuth("/albums")
      .then(res =>{
        setDataArray(res.data);
        console.log("dataArray",dataArray)
      })
      }, []);

  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {dataArray.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/album/show?id=${data.id}`}>
          <Card className={classes.card} style={{ backgroundColor: getRandomColor() }}>
            <CardContent>
              <h1  style={{ fontSize: '2rem', margin: 0, color: 'white' }}>{data.name}</h1>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default DynamicGridPage;
