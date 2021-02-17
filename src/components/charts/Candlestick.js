import React from 'react';
import Plot from 'react-plotly.js';
import data from '../../utils/renderGraph';

function Candlestick(props) {
    return (
        <Plot 
            data={data.candlestickData(data)}
            layout= {{
                dragmode: 'zoom',
                showlegend: false,
                xaxis: {
                  rangeslider: {
                       visible: false
                   }
                }}}/>
    )
        
}

export default Candlestick;