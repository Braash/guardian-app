import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core';
import Footer from '../components/Footer'
import { color } from 'highcharts';
import arrow from '../assets/arrow1.png'
import { useNavigate } from 'react-router-dom'

interface Props {
  id: any
}

const Currency: React.FC = () => {
  const [coin, setCoin] = useState<Props[]>([]);
  const [description, setdescription] = useState();
  const [circulating, setCirculating] = useState<Props[]>([]);
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [market, setMarket] = useState();
  const [allth, setallth] = useState();
  const [maxSupply, setMaxSupply] = useState();
  
  const useStyles = makeStyles(() =>({
        BackgroundContent:{
          display: 'flex',
          flexDirection: 'column',
          padding: '40px',
          borderRadius: '10px',
          margin: '30px',
          cursor: 'pointer',
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(52,52,52,1) 46%, rgba(232,250,254,0.3435749299719888) 100%)',
        },
        Main:{
          height:'100vh',
          width: 'auto'
        },
        Name:{
          marginBottom: '10px',
          color: '#939393'
        },
        Symbol:{
          textTransform: 'uppercase',
          color: '#939393'
        },
        Description: {
          fontSize:'12px',
          marginTop: '30px',
          marginBottom: '30px',
          marginLeft: '40px',
          borderRadius: '10px',
          padding: '30px',
          paddingTop: '20px',
          margin: '30px',
          cursor: 'pointer',
          background: '#222227',
          color: '#939393',
          oppacity: '0.8',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxHeight: '60ch',
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.397), 0 1px 2px 0 rgba(0, 0, 0, 0.123)',
          },
        },
        Image: {
          marginBottom: '10px',
          marginTop: '10px'
        },
        Container: {
          background: '#212025',
          backgroundImage: "url(./backg.jpeg)",
          '&:hover': {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.397), 0 1px 2px 0 rgba(0, 0, 0, 0.123)',
          },
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'row',
          padding: '25px'
        },
        Container1: {
          padding: '25px'
        },
        Container2: {
          padding: '25px',
          marginRight: '25px'
        },
        Number: {
          fontWeight: 'bold',
          color: '#939393'
        },
        Text:{
          marginBottom: '15px',
          color: '#939393'
        },
        Bottom:{
          height: '50px'
        },
        Arrow:{
          margin: '15px',
          height: '60px',
          width: '70px',
          justifyContent: 'right'
        }
      }))
    
    const classes = useStyles();

    const navigate = useNavigate();
    
    useEffect(() => {
      const value = localStorage.getItem("coin")
      const value1 = localStorage.getItem("coin.market_data")

        if (typeof value === 'string') {
            const parse = JSON.parse(value) 
            console.log(parse.id)
            setCoin(parse)
        }
    }, []);
    
    const searchedCoin: any = coin;
    const name = searchedCoin.name
    const symbol = searchedCoin.symbol
    const marketCapRank = searchedCoin.market_cap_rank

    setTimeout(function(){
      const description : any = searchedCoin.description.en 
      setdescription(description);
    }, 1000);

    setTimeout(function(){
      const image : any = searchedCoin.image.thumb 
      setImage(image)
    }, 1000);

    setTimeout(function(){
      const supply : any = searchedCoin.market_data.circulating_supply 
      setCirculating(supply)
    }, 1000);

    setTimeout(function(){
      const price : any = searchedCoin.market_data.current_price.usd 
      setPrice(price)
    }, 1000);

    setTimeout(function(){
      const mc : any = searchedCoin.market_data.market_cap.usd 
      setMarket(mc)
    }, 1000);

    setTimeout(function(){
      const ath : any = searchedCoin.market_data.ath.usd 
      setallth(ath)
    }, 1000);

    setTimeout(function(){
      const MAS : any = searchedCoin.market_data.max_supply 
      setMaxSupply(MAS)
    }, 1000);

    return (
        <div>
             <div className={classes.BackgroundContent}>
                    <div  className={classes.Container}>
                        <div className={classes.Container2}>
                          <h1 className={classes.Symbol}>{symbol}</h1>
                          <img className={classes.Image} src={image} alt='crypto'/>
                          <h3 className={classes.Name}>{name}</h3>
                        </div>
                        <div className={classes.Container1}>
                          <p className={classes.Text}>Current Price | <span className={classes.Number}>${price}</span></p>
                          <p className={classes.Text}>Ranking | <span className={classes.Number}>{marketCapRank}</span></p>
                          <p className={classes.Text}>Circulating Supply | <span className={classes.Number}>{circulating}</span></p>
                          <p className={classes.Text}>Market Cap Value (USD) | <span className={classes.Number}>${market}</span></p>
                        </div>
                        <div className={classes.Container1}>
                          <p className={classes.Text}>ATH | <span className={classes.Number}>${allth}</span></p>
                          <p className={classes.Text}>Maximun Supply | <span className={classes.Number}>{maxSupply}</span></p>
                        </div>  
                    </div>     
                      <div className={classes.Description}>
                        {description}
                      </div>
                      <img onClick={() => navigate('/', { replace: true })} className={classes.Arrow} src={arrow}/> 
              </div>
            <Footer/>
       </div>
    )
}

export default Currency;
