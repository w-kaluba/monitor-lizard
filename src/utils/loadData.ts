var plotly = require("plotly.js");

const api = {
    load: [Object()]
};

function loadData(path: String): Array<Object> {
    const result = plotly.d3.csv(path, (data: Array<Object>) => {
        return data;
    });
    console.log(result);
    return result;
}

api.load = loadData("../staticdata/btcusd_data.csv");

export default api;
