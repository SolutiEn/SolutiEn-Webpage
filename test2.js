/*
const categories = [ 'قیر','دوده صنعتی', 'روغن', 'اکستراکت', 'شیمیایی', 'نفتا', 'گوگرد', 'پلیمر', 'گازها و خوراکها',
    'وکیوم باتوم', 'آیزوریسایکل', 'لوب کات', 'بنزین', 'نفت', 'آیزوفید', 'فرآورده های نفتی', 'حلال', 'سلاپس واکس',
    'عایق رطوبتی', 'قیر خالص', 'قیر امولسیون', 'قیر محلول', 'قیر اصلاح شده', 'قیر نفتی', 'قیر دمیده', 'قیر', 'وکیوم باتوم',
    'آیزوریسایکل', 'لوب کات', 'آیزوفید', 'نفت', 'بنزین', 'نفتا', 'اکستراکت', 'روغن', 'حلال', 'اسلاک واکس', 'پارافین واکس'],
    start_date = '1399/06/01', end_date = '1400/06/01'
const url = 'http://127.0.0.1:80/market/ime/data?'  //'https://solutien-api-main-solutientest1.apps.ir-thr-at1.arvan.run/market/ime/data?'
var current_values=[], current_dates = []


const get_cat_data = async (name) => {
        current_values = [];
        current_dates = [];
        const response = await fetch(url + new URLSearchParams({name: name, start_date:start_date,
            end_date:end_date}), {method:"GET",headers:{'Accept': 'application/json'}});
        const result = await response.json();
        // do something with myJson
        current_values.push(result['price']);
        current_dates.push(result['date_georgian']);
}

set_plot('قیر');
async function set_plot(name){
    await get_cat_data(name);

    var trace1 = {
    x: current_dates,
    y: current_values,
    mode: 'scatter',
    };

    var data = [trace1];

    var layout = {
    title:'Line and Scatter Plot',
    height: 400,
    width: 480
    };
    Plotly.newPlot('plotdiv', data, layout, {showSendToCloud: true});
    console.log(data)

};

 var innerContainer = document.querySelector('[data-num="0"]'),
        plotEl = innerContainer.querySelector('.plot'),
        countrySelector = innerContainer.querySelector('.countrydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(categories, countrySelector);

    function updateCountry(){
        set_plot(countrySelector.value);
    }

    countrySelector.addEventListener('change', updateCountry, false);

 */