
import {Viewer} from '@activewidgets/examples';
import {render, h} from 'preact';
import * as pages from '../index.js';
import * as components from '../../';


let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


function mount(component, props){
    let container = document.getElementById('app');
    container.innerHTML = '';
    render(h(tags[component], props), container);
}


function clean(){
    let container = document.getElementById('app');
    render(null, container);
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
