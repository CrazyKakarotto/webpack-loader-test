import _ from 'lodash';

import txt from '../mytest.txt'
console.error(111)
function component() {

    var element = document.createElement('div');

    var button = document.createElement('button');

    var br = document.createElement('br');



    button.innerHTML = 'Click me and look at the console!';

    element.innerHTML = _.join('【' + txt + '】');

    element.className = 'hello'

    element.appendChild(br);

    element.appendChild(button);



    // Note that because a network request is involved, some indication

    // of loading would need to be shown in a production-level site/app.

    return element;

}

document.body.appendChild(component());