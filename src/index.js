import Print from './print';

 function getComponent() {

    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me';
    element.appendChild(br);
    element.appendChild(button);

    button.onclick =  Print.bind(null, 'Hello webpack');

/*    button.onclick = e => import(/!* webpackChunkName: "print" *!/'./print').then(module=>{
        var print = module.default;
        print();
    });*/

    return element;

}

document.body.appendChild(getComponent());

/*getComponent().then(component => {
    console.log(component);
   document.body.appendChild(component);
});*/
