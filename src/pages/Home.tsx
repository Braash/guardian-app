import React from 'react'
import Banner from '../components/Banner'
import Coins from '../components/Coins'
import Footer from '../components/Footer'

const Home: React.FC = () => {
    /*
    const handleClick = (e: any) => {
        const id = e.target.id;
        console.log(id);
        console.log(e.target)
        axios
          .get(SingleCoin(id))
          .then(res => {
            setIndvCoins(res.data);
            console.log(res.data);
            console.log(indvCoins)
          })
          .catch(error => console.log(error));
    };
    */
    return (
        <div>
            <Coins />
            <Footer />
        </div>
    )
}

export default Home
