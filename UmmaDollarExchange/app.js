import { useState, useEffect } from "react";

export default function UmmaDollarExchange() {
  const [sendMethod, setSendMethod] = useState("bkash");
  const [sendAmount, setSendAmount] = useState(0);
  const [receiveMethod, setReceiveMethod] = useState("USDT");
  const [receiveAmount, setReceiveAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState({ USDT: 110, BTC: 50000, ETH: 3500 });

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether,bitcoin,ethereum&vs_currencies=usd");
        const data = await response.json();
        setExchangeRate({
          USDT: data.tether.usd,
          BTC: data.bitcoin.usd,
          ETH: data.ethereum.usd,
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    }
    fetchRates();
  }, []);

  useEffect(() => {
    setReceiveAmount(sendAmount / exchangeRate[receiveMethod]);
  }, [sendAmount, receiveMethod, exchangeRate]);

  return (
    <div className="container">
      <h1>বিশ্বাসের আরেক নাম Umma Buy Sell</h1>
      <p>24/7 যে কোন ডলার এক্সচেঞ্জ করতে পারবেন।</p>
      
      <div className="card">
        <h2>You Send</h2>
        <select onChange={(e) => setSendMethod(e.target.value)}>
          <option value="bkash">Bkash</option>
          <option value="nagad">Nagad</option>
          <option value="rocket">Rocket</option>
        </select>
        <input type="number" value={sendAmount} onChange={(e) => setSendAmount(parseFloat(e.target.value) || 0)} placeholder="Amount in BDT" />
      </div>

      <h3>Equivalent Crypto Amount</h3>
      
      <div className="card">
        <h2>You Receive</h2>
        <select onChange={(e) => setReceiveMethod(e.target.value)}>
          <option value="USDT">USDT</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>
        <input type="number" value={receiveAmount.toFixed(6)} readOnly placeholder="Amount" />
      </div>
      
      <button>Exchange Now</button>
    </div>
  );
}