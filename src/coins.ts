import axios from "axios";
import { green, red } from "colors/safe";

export class GetPolo {
    public url: string = "https://poloniex.com/public?command=returnTicker";

    public getCoin(value): void {
        axios.get(this.url).then((res) => {
            if (res.status !== 200) {
               throw new Error(`Error on consulting Poloniex api url (${this.url}). \n ${res.data.message}`);
            }
            console.log(red("[!] Poloniex [+]"));
            try {
                console.log(green(`Valor => ${res.data[`BTC_${value}`]['last']}`));
                console.log(green(`Menor valor => ${res.data[`BTC_${value}`]['low24hr']}`));
                console.log(green(`Volume => ${res.data[`BTC_${value}`]['baseVolume']}`));
                console.log(green(`low24hr => ${res.data[`BTC_${value}`]['low24hr']}`));
            } catch (error) {
                throw new Error(`Informe uma moeda válida`);
            }
        }).catch((err) => {
            console.log(green(`${err}`));
        });
    }
}
