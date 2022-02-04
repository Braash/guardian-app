import React from 'react'
import { makeStyles, Container } from '@material-ui/core';
import Background from '../assets/Background.jpeg'


const Banner: React.FC = () => {
    


    const useStyles = makeStyles(() =>({
        Background: {
          backgroundImage: `url(${Background})`,
          opacity: 0.2
        },
        BackgroundContent:{
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }
      }))
    
    const classes = useStyles();
    

    return (
        <div className={classes.Background}>
            <Container className={classes.BackgroundContent}>

            </Container>
        </div>
    )
}

export default Banner;