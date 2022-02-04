import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem } from "@material-ui/core"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom'
import image from '../assets/logo.png'
import image2 from '../assets/home1.png'

const Header: React.FC = () => {

    const useStyles = makeStyles(() =>({
        Logo: {
            flex: 1,
            color: 'lightgrey',
            fontWeight: 'bold',
            FontFamily: 'Arial',
            cursor: 'pointer',
            marginLeft: -25,
            paddingLeft: 0,
        },
        Img:{
            height: '80px',
            width: 'auto',
            cursor: 'pointer',
            margin: '10px'
        },
        Home: {
            height: '35px',
            width: 'auto',
            cursor: 'pointer',
            margin: '10px'
        },
        Bar: {
            height: '100px',
            lineHeight: '100px',
        }
    }))

    const classes = useStyles();
    
    const navigate = useNavigate();

    return (
        <div>
                <AppBar className={classes.Bar}  color="transparent" position="static">
                    <Container>
                        <Toolbar>
                            <img onClick={() => navigate('/', { replace: true })} className={classes.Img} src={image}/>
                            <Typography className={classes.Logo} onClick={() => navigate('/', { replace: true })}></Typography>
                            <img onClick={() => navigate('/', { replace: true })} className={classes.Home} src={image2}/>
                        </Toolbar>
                    </Container>
                </AppBar>
        </div>
    )
}

export default Header
