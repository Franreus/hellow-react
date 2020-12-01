"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var key = '1586f743610104a4d78ba799556b9d0d';
var city = 'Tarragona';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key;
console.log(url);

var getWeather = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return axios.get(url);

                    case 2:
                        result = _context.sent;

                        console.log(result.data.main);
                        render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getWeather() {
        return _ref.apply(this, arguments);
    };
}();

getWeather();

/* --source-maps --watch --presets=@babel/preset-env,@babel/preset-react 
"dependencies": {
    "@babel/polyfill": "^7.12.1",
    "core-js": "^3.8.0"
  }*/
/* 
const personA = {
    name: 'Perico',
    age: 26,
    city: 'Reus'
}
const sumar = ()=>{
    personA.age = personA.age + 1
    // personA.age += 1
    // personA.age ++
    render()
}
const restar = ()=>{
    personA.age = personA.age - 1
    // personA.age -= 1
    // personA.age -- 
    render()
}
const reset = ()=>{
    personA.age = 0
    render()
}
const appRoot = document.getElementById('appRoot')
const render = ()=>{
    const template = (
        <div>
            <h1>Nombre: {personA.name}</h1>
            <p>Edad: {personA.age}</p>
            <p>Ciudad: {personA.city}</p>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}
render() */
