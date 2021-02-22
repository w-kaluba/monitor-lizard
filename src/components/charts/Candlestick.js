import React from 'react';
import Plot from 'react-plotly.js';
import data from '../../utils/renderGraph';

async function Candlestick(props) {
    const plot = await data.candlestickData(data);
    console.log(plot);
    return (
        <Plot 
            data={plot}
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