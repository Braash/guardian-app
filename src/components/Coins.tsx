import React, {useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core';
import axios from 'axios';
import {TrendingCoins} from '../apis/api'
import Coin from './Coin'
import searchIcon from '../assets/search.png'

interface PostInfo {
    id: string,
    name: string,
    current_price: number,
    symbol: string,
    total_volume: number,
    market_cap: number,
    image: string,
    price_change_percentage_24h: number
}

const Coins: React.FC= () => {
    const [coins, setCoins] = useState<PostInfo[]>([]);
    const [search, setSearch] = useState('');

    const useStyles = makeStyles(() =>({
        Carousel: {
            height: "60%",
            display: "flex",
            alignItems: 'center'
        },
        CoinApp: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '45px',
            color: '#fff',
        },
        SearchIcon: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '15px',
            height: '40px',
            width: '40px',
        },
        CoinSearch: {
            marginBottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignContent: 'center'
        },
        CoinText: {
            marginBottom: '32px',
            textAlign: 'center',
            color: 'grey'
        },
        CoinInput: {
            paddingLeft: '16px',
            width: '300px',
            height: '50px',
            borderRadius: '8px',
            border: 'none',
            color: 'grey',
            backgroundColor: '#26262B',
            boxShadow:'inset 0 0 20px #101011'
        }
    }))

    const handleChange = (e: any) => {
      setSearch(e.target.value);
    };

    const searchedCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios
          .get(TrendingCoins)
          .then(res => {
            setCoins(res.data);
          })
          .catch(error => console.log(error));
      }, []);
    
    const classes = useStyles();

    return (
      <div className={classes.CoinApp}>
        <div className={classes.CoinSearch}>
          <img  className={classes.SearchIcon} src={searchIcon}/>
          <form>
            <input
              className={classes.CoinInput}
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
            {searchedCoins.map(coin => {
              return (
                <Coin
                  ID={coin.id}
                  coin={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
                );
            })}
        </div>
    )
}

export default Coins;
