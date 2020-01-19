
import {h} from 'preact';
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/preact';
import * as components from '@activewidgets/components';

let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});

export function render(component, props){

    if (!tags[component]){
        throw new Error('component not found - ' + component);
    }

    return originalRender(h(tags[component], props));
}

export {fireEvent, wait, waitForElement};