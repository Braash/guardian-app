import React from 'react'
import { makeStyles } from '@material-ui/core';

const Footer: React.FC = () => {
    
  const useStyles = makeStyles(() =>({
        BackgroundContent:{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        },
        GLogo: {
          margin: '30px',
          height: '70px',
          width: '70px'
        },
        Guardian: {
          marginLeft: '30px',
          fontWeight: 'bold',
          color: 'black'
        } 
      }))
    
    const classes = useStyles();
    
    return (
        <div className={classes.BackgroundContent}>
          <p className={classes.Guardian}>Guardian | Crypto Tracking Tool</p>
        </div>
    )
}

export default Footer;