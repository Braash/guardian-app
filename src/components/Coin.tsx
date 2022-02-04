import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import {SingleCoin} from '../apis/api'
import { useNavigate } from 'react-router-dom'

interface Props {
    ID: string,
    coin: string,
    price: number,
    symbol: string,
    marketcap: number,
    volume: number,
    image: string,
    priceChange: number
}

interface PostInfo {
    state: any
}
  
interface Coin {
    Coin: Coin[]
}

const Coin: React.FC<Props> = ({ID, coin, price, symbol, marketcap, volume, image, priceChange} : Props) => {
    const [indvCoins, setIndvCoins] = useState<PostInfo[]>([]);
    
    const useStyles = makeStyles(() =>({
            CoinContainer: {
                display: 'block',
                justifyContent: 'center',
                paddingLeft: '20px',
                paddingRight: '20px',
                borderRadius: '10px',
                margin: '5px',
                cursor: 'pointer',
                background: '#222227',
                padding: '5px',
                '&:hover': {
                    boxShadow:'inset 0 0 20px #101011',
                    background: 'linear-gradient(90deg, rgba(23,23,25,1) 0%, rgba(46,46,50,1) 53%, rgba(199,212,214,0.3435749299719888) 100%)',
                },
            },
            CoinRow: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                height: '80px',
                width: '900px'
            },
            Coin: {
                display: 'flex',
                alignItems: 'center',
                paddingRight: '12px',
                minWidth: '300px'
            },
            CoinName: {
                marginRight: '12px',
                color: '#D6D6D6'
            },
            CoinH1: {
                fontSize:' 12px',
                width: '150px'
            },
            CoinImg: {
                height: '30px',
                width: '30px',
                marginRight: '10px'
            },
            CoinSymbol: {
                textTransform: 'uppercase',
                fontSize:'12px',
                color: '#D6D6D6'
            },
            CoinData: {
                display: 'flex',
                textAlign: 'right',
                float: 'right',
                fontSize:'12px',
                justifContent: 'space-between',
                width: "100%",
                color: '#D6D6D6'
            },
            CoinPrice: {
                width: '110px',
                fontWeight: 'bold'
            },
            CoinVolume: {
                width: '155px',
                fontWeight: 'bold'
            },
            CoinMarketcap: {
                width: '230px',
                fontWeight: 'bold'

            },
            Red: {
                color: "#f00606",
                width: '100px',
                fontWeight: 'bold'
            },
            Green: {
                color: '#8CE117',
                width: '100px',
                fontWeight: 'bold'
            },
            CoinBox: {
                color: 'none',
                backgroundColor: 'none',
                zIndex: 14
            }
    }))
    
    const classes = useStyles();

    const navigate = useNavigate();
    
    const handleClick = (e: any) => {
        const id = e.target.id;
        console.log(id);
        console.log(e.target)
        axios
          .get(SingleCoin(id))
          .then(res => {
            setIndvCoins(res.data);
            console.log(res.data);
            localStorage.setItem('coin', JSON.stringify(res.data));
            navigate(`/explore/${id}`, { state: res.data })
            console.log(indvCoins)
          })
          .catch(error => console.log(error));
    }; 

    return (
            <div className={classes.CoinBox} onClick={handleClick} id={ID}>
                <div className={classes.CoinContainer} id={ID}>
                    <div className={classes.CoinRow} id={ID}>
                        <div className={classes.Coin} id={ID}>
                            <img src={image}  className={classes.CoinImg} alt='crypto' id={ID}/>
                            <h4 className={classes.CoinName} id={ID}>{coin}</h4>
                            <p className={classes.CoinSymbol} id={ID}>{symbol.toUpperCase()}</p>
                        </div>
                        <div className={classes.CoinData} id={ID}>
                            <p className={classes.CoinPrice} id={ID}>${price}</p>
                            <p className={classes.CoinVolume} id={ID}>${volume.toLocaleString()}</p>

                            {priceChange < 0 ? (
                            <p className={classes.Red}>{priceChange.toFixed(2)}%</p>
                            ) : (
                            <p className={classes.Green}>{priceChange.toFixed(2)}%</p>)}
                            <p className={classes.CoinMarketcap} id={ID}>
                                CS: ${marketcap.toString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Coin;