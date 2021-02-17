import data from './loadData';
import './theme'
import theme from './theme';

interface Row {
    [key: string]: string
}

function unpack(rows: Array<any>, key: string) {
    return rows.map(function (row: Row) {
        return row[key];
    });
}

/**
 * A function that takes a div element to draw in and draws a candlestick chart
 * @param Element div 
 * @param Array<JSON> data 
 */
function formatCandlestickData(data: Array<JSON>): Object {
    console.log(`\nDATA:${typeof data}\n`);
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