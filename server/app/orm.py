import alpaca_trade_api as tradeapi

class AlpacaAPI:
  def __init__(self):
    self.api_key = "PKKC98KNEJSHT2EAKBJ4"
    self.secret_key = "QWcb9tbA9b4gxB7DjlLkWrAbFEVEPMMZhpGRi8wh"
    self.base_url = "https://paper-api.alpaca.markets"
    self.api = tradeapi.REST(self.api_key, self.secret_key, self.base_url)

  def get_account(self):
    return self.api.get_account()

  def get_asset(self, symbol):
    return self.api.get_asset(symbol)

  def get_barset(self, symbols, timeframe, limit):
    return self.api.get_barset(symbols, timeframe, limit)
  
  def get_ticker_financials(self, symbol):
    start_date = '2022-01-01'
    end_date = '2022-12-31'
    return self.api.get_financials_v2(symbol=symbol, start_date=start_date, end_date=end_date)

  # Add more methods as needed

"""
api_key = "PKKC98KNEJSHT2EAKBJ4"
secret_key = "QWcb9tbA9b4gxB7DjlLkWrAbFEVEPMMZhpGRi8wh"
trade_client = tradeapi.REST(api_key,secret_key,base_url)
start_date = '2022-01-01'
end_date = '2022-12-31'
symbol = 'AAPL'
trade_client.get_financials_v2(symbol=symbol, start_date=start_date, end_date=end_date)
"""
