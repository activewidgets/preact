/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, render } from 'preact';
import { Datagrid } from '@activewidgets/preact';
import './styles.css';


const rows = [
    { message: 'Hello, World!' }
];


function App(){
    return <Datagrid rows={rows} />
}


render(<App />, document.getElementById('app'));
