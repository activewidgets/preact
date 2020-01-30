
import {Viewer} from '@activewidgets/examples';
import {h} from '@activewidgets/preact';
import {render} from 'preact';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './preact.svg';
import pkg from '../../package.json';


let framework = 'Preact',
    container = document.getElementById('app');


function mount(component, props){
    container.innerHTML = '';
    render(h(component, props), container);
}


function clean(){
    render(null, container);
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
