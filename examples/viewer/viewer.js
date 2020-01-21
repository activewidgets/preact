
import {Viewer} from '@activewidgets/examples';
import {render} from 'preact';
import * as pages from '../index.js';
import {h} from '../../';


function mount(component, props){
    let container = document.getElementById('app');
    container.innerHTML = '';
    render(h(component, props), container);
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
