import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Currency from './pages/Currency'
import { makeStyles} from '@material-ui/core/styles';

const Application: React.FC = () => {

  const useStyles = makeStyles(() =>({
    Application: {
      backgroundColor: "#2F2E33",
      color: '#B3B2BB',
      minHeight: "100vh"
    }
  }))

const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.Application}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/explore" />} />
          <Route path="/explore" element={<Home/>} />
          <Route path='/explore/:id' element={<Currency />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Application;
