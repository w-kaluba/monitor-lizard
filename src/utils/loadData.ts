var plotly = require("plotly.js");

interface API {
    load(): Promise<Array<Object>> 
}

interface Row {
    [key: string]: string
}

async function loadCandlestickData(path: String): Promise<Array<Object>>{
    const result = plotly.d3.csv(path, (data: Array<Object>) => {
        return data;
    });
    await result;
    console.log("Result: " + result);
    return result;
}

function unpack(rows: Array<any>, key: string) {
    console.log(rows);
    return rows.map(function (row: Row) {
        return row[key];
    });
}

/**
 * A function that takes a div element to draw in and draws a candlestick chart
 * @param Element div 
 * @param Array<JSON> data 
 */
async function formatCandlestickData(input: Promise<Array<Object>>): Promise<any> {
    const data = await input;
    await data;
    console.log(`\nDATA:${typeof data}\n`);
    console.log(await data);
    const trace = {
        x: unpack(data, 'timestamp'),
        close: unpack(data, 'close'),
        high: unpack(data, 'high'),
        low: unpack(data, 'low'),
        open: unpack(data, 'open'),

        increasing: { line: { color: theme.GREEN } },
        decreasing: { line: { color: theme.RED } },

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
    },
        plotData = [trace],
        output = {
            plotData,

        };
        return output;
}

const api = {
    candlestickData: formatCandlestickData(data.load),
};

export default api; 

const api = {
    load: loadCandlestickData("http://0.0.0.0:8000/src/staticdata/btcusd_data.csv"),
}

export default api;
