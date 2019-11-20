
console.log('main.js: before import a');


import('./b.js').then((b) => {
    console.log(b);
});


import a from './a.js';
a();

console.log('main.js: after a()');

document.getElementById('importc').onclick = async function() {
    console.log('click me');

    const c = await import('./c.js');

    console.log(c.default());
};