<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Umma Dollar Buy Sell</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Umma Dollar Buy Sell</h1>
        <p>বিশ্বাসের আরেক নাম Umma Buy Sell, 24/7 যে কোন ডলার এক্সচেঞ্জ করতে পারবেন।</p>

        <div class="exchange-box">
            <h2>You Sent</h2>
            <select id="payment-method">
                <option value="Bkash Personal">Bkash Personal</option>
                <option value="Nagad Personal">Nagad Personal</option>
                <option value="Rocket Personal">Rocket Personal</option>
            </select>
            
            <input type="number" id="amount" placeholder="Enter amount in BDT" oninput="calculateCrypto()">
            
            <h2>You Receive</h2>
            <select id="receive-method" onchange="calculateCrypto()">
                <option value="USDT">USDT (Tether)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
            </select>
            
            <input type="text" id="crypto-amount" placeholder="Receive Amount" readonly>
            
            <button onclick="createOrder()">Create Order</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>