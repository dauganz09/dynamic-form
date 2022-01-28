import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Form from '../components/Form';


const Home: NextPage = () => {
  return (
    <>
    <AppBar
      position="sticky"
      color="primary"
      
      elevation={1}
      


    >
        <Toolbar>
         
         
          
        </Toolbar>
      </AppBar>
    <Container maxWidth="md" >
      <Form/>
    </Container>
    </>
  );
};

export default Home;
