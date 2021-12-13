/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { h, render } from 'preact';
import { Datagrid } from '@activewidgets/preact';
import { northwind } from '@activewidgets/examples/data';
import * as templates from './templates';
import options from './options';
import './styles.css';

/** @jsx h */

const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    { header: 'Country', type: 'country flag', field: 'country' },
    { header: 'Phone/Fax', type: 'phone & fax'},
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];

const rows = northwind.customers;

function App(){
    return <Datagrid columns={columns} rows={rows} templates={templates} options={options}/>
}

render(<App />, document.getElementById('app'));
