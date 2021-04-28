import datetime
import os

import pandas as pd
from binance.client import Client

class BinanceClient:
    def __init__(self) -> None:
        self.start_date = datetime.datetime.strptime('1 Jan 2021', '%d %b %Y')
        self.today = datetime.datetime.today()
        # YOUR API KEYS HERE
        self.api_key = os.getenv("API_KEY")
        self.api_secret = os.getenv("API_SECRET") #Enter your own API-secret here

        self.bclient = Client(api_key=self.api_key, api_secret=self.api_secret)

    
    def setStartDate(self, date):
        self.start_date = datetime.datetime.strptime(date, '%d %b %Y')

    def fetchCandlestickData(self, symbol, interval):
        """
        Returns the candlestick data for the specified symbol over the specified interval.
    
        :param symbol: required
        :type symbol: str
        :param interval: required
        :type interval: str
        """
        print('working...')
        filename = f'{symbol}_MinuteBars.csv'

        timeformat = "%d %b %Y %H:%M:%S"
        klines = self.bclient.get_historical_klines(symbol, interval, self.start_date.strftime(timeformat), self.today.strftime(timeformat), 1000)
        data = pd.DataFrame(klines, columns = ['timestamp', 'open', 'high', 'low', 'close', 'volume', 'close_time', 'quote_av', 'trades', 'tb_base_av', 'tb_quote_av', 'ignore' ])
        data['timestamp'] = pd.to_datetime(data['timestamp'], unit='ms')

        data.set_index('timestamp', inplace=True)
        data.to_csv(filename)
        print('finished!')

    
    def fetchSymbolChange(self, symbol):
        #
        print('working...')
        filename = 'SymbolChange.csv'

        timeformat = "%d %b %Y %H:%M:%S"
        klines = self.bclient.get_historical_klines(symbol, self.start_date.strftime(timeformat), self.today.strftime(timeformat), 1000)

if __name__ == '__main__':
    # Obviously replace BTCUSDT with whichever symbol you want from binance
    # Wherever you've saved this code is the same directory you will find the resulting CSV file
    client = BinanceService()
    client.fetchCandlestickData('BTCUSDT', '15m')


