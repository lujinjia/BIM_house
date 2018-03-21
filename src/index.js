require('es6-promise').polyfill();

async function getComponent() {

    var element = document.createElement('div');
    const _ = await import(/* webpackChunkName: "lodash" */'lodash');

    console.log(_);

    element.innerHTML = _.default.join(['Hello', 'webpack2'], '');

    return element;


}

getComponent().then(component => {
    console.log(component);
   document.body.appendChild(component);
});