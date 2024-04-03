import React from "react";
import axios from "axios";

export const getBitCoinData = async () => {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = response.data
    return data
}