# Monitor Lizard

Monitor lizard is a SPA for monitoring and reacting to the price of cryptocurrencies
It allows users to:
- View Candlesticks for a given symbol
	- Symbol
	- Interval
	- Start period
- Overlay trend lines for different currency pairs on the same graph
- Summary statistics
	- Symbol
	- Standard time ranges
		- Change
		- High
		- Low
		- Volume
- Chart corresponding technical indicators (RSA, MA, Bollinger Bands)
- Track the prices of multiple cryptocurrencies at the same time

## Architecture

### Front-end

The front-end is built in React and sends GraphQL requests to a back-end server running Python.
Stores the user's preferred crypto pairs using session storage.

### Back-end

## Market data

The market data is retrieved by a Java service. It caches a store of historic data and makes requests for regular updates from the Binance servers.

It then receives the GraphQL queries from the front-end client, filters the data to be as specific as possible to the query and then returns the specified information to the client.

#### Stretch Goals:
- Moving averages on candlestick chart
- Using cookies to store user's preferred symbol pairs
- User accounts with preferences, favourites etc.

## TO-DO:
- Refactor class based components to functional components
- Refactor props to use redux store
