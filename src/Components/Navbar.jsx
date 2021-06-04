import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/customers">Holders</a>
                <a href="/transfer">Transfer</a>
                <a href="/history">Transaction History</a>
            </div>
        </div>
    )
}

export default Navbar
