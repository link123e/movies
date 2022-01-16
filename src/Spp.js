import React, { useEffect, useState } from "react";
function Spp(){
    const[Loading, setLoading]=useState(true)
    const[coin,setCoins]=useState([])
    useEffect(()=>{fetch('https://api.coinpaprika.com/v1/tickers')
       .then((response)=>{return response.json()})
       .then((json)=>{
           setCoins(json);
           setLoading(false);
        })
    },[])
    return(
     <div>
         <h1>Coins!</h1>
         {Loading ? <h2>Loading...</h2>: null}
         <ul>
             {coin.map((first)=><li key={first.id}>{first.name}({first.symbol}) : ${first.quotes.USD.price}USD</li>)}
         </ul>
     </div>
    )
}
export default Spp;