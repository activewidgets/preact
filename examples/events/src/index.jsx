/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, render } from 'preact';
import { Datagrid } from '@activewidgets/preact';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';

/** @jsx h */

function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


function App(){
    return <Datagrid columns={columns} rows={rows} onMouse={onMouse} />
}


render(<App />, document.getElementById('app'));
