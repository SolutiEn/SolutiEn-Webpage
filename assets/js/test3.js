/*


var categories = ['روغن' ,'قیر', 'دوده صنعتی', 'روغن', 'اکستراکت', 'شیمیایی', 'نفتا', 'گوگرد', 'پلیمر', 'گازها و خوراکها',
    'وکیوم باتوم', 'آیزوریسایکل', 'لوب کات', 'بنزین', 'نفت', 'آیزوفید', 'فرآورده های نفتی', 'حلال', 'سلاپس واکس',
    'عایق رطوبتی', 'قیر خالص', 'قیر امولسیون', 'قیر محلول', 'قیر اصلاح شده', 'قیر نفتی', 'قیر دمیده', 'قیر', 'وکیوم باتوم',
    'آیزوریسایکل', 'لوب کات', 'آیزوفید', 'نفت', 'بنزین', 'نفتا', 'اکستراکت', 'روغن', 'حلال', 'اسلاک واکس', 'پارافین واکس']
categories = [... new Set(categories)]

let end_date = new Date().toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
let start_date = new Date((new Date()).getTime() - 100*86400*1000).toLocaleDateString('fa-IR').replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));

const url = 'https://solutien-api-main-solutientest1.apps.ir-thr-at1.arvan.run/market/ime/data?'  //'https://solutien-api-main-solutientest1.apps.ir-thr-at1.arvan.run/market/ime/data?'
var current_values=[], current_dates = []
var layout = {
    //paper_bgcolor: "rgb(255,255,255)",
    //plot_bgcolor: "rgb(229,229,229)",
    title: 'Daily Price Chart for IME Market',
    height: 400*900/480,
    //width: 900,
  xaxis: {
        title:'Date',
    tickformat: '%d %B (%a)\n %Y',
    showline: true,
    showgrid: false,
    tickwidth: 2,
    ticklen: 5,
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: [start_date, end_date]},
    type: 'date'
  },
  yaxis: {
        title:'Price (Toman)',
        autorange: true,
        showgrid: true,
        showline: true,
  }
};
var config = {responsive: true}

const get_data = async (name) => {
  const response = await fetch(url + new URLSearchParams({name: name, start_date:start_date, end_date:end_date}),
      {method:"GET",headers:{'Accept': 'application/json'}});
  const myJson = await response.json(); //extract JSON from the http response
  return JSON.parse(myJson)
}

function f(x){
  return x.toString().split('T')[0];
};
set_plot('روغن');
async function set_plot(name){
  get_data(name).then(r => {
  Plotly.newPlot('plotdiv',
      [{
          type: 'scatter',
          mode:'lines+markers',
          name: name,
          x: Object.keys(r['price']),
          y: Object.values(r['price']),
          line: {shape: 'spline'},
          connectgaps: true,
          marker:{size: 12, opacity: 0.5},
  }],
      layout,
      config);
    })
};

 var innerContainer = document.querySelector('[data-num="0"]'),
        plotEl = innerContainer.querySelector('.plot'),
        category_selector = innerContainer.querySelector('.countrydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(categories, category_selector);

    async function update_category(){
        await set_plot(category_selector.value);
    }

    category_selector.addEventListener('change', update_category, false); */