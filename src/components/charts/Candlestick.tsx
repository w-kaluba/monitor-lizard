import React from 'react';
import plotly from 'plotly.js'
import theme from '../../utils/theme'
import Plot, { PlotParams } from 'react-plotly.js';

interface Row {
    [key: string]: string
}

class Candlestick extends React.Component<{}, PlotParams> {
    constructor(props: any) {
        super(props)
        this.state = {data: [], layout: {}, frames: [], config: {}};
    }

    updateData = (data: Array<any>) => {
        this.setState({
            data: data,
        });
    }

    loadCandlestickData = (path: string): void => {
        try {
            plotly.d3.csv(path, this.updateData);
        } catch(err) {
            console.log(err);
        }
        return;   
    }

    unpack(rows: Array<any>, key: string) {
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
    formatCandlestickData =  (): any => {
        const trace = {
            x: this.unpack(this.state.data, 'timestamp'),
            close: this.unpack(this.state.data, 'close'),
            high: this.unpack(this.state.data, 'high'),
            low: this.unpack(this.state.data, 'low'),
            open: this.unpack(this.state.data, 'open'),
    
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

    render() {
        return this.state.data ? (
            <Plot
                data={this.state.data}
                layout={this.state.layout}
                config={this.state.config}
                onInitialized={(figure) => figure}
                onUpdate={(figure) => figure}
            />
        ) : <div></div>;
    }
    
}
export default Candlestick;