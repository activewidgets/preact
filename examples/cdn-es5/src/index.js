/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Datagrid = ActiveWidgets.Preact.Datagrid;

var rows = [
    { framework: 'preact', source: 'CDN', language: 'ES5'}
];

var App = preact.h(Datagrid, {rows: rows});

preact.render(App, document.getElementById("app"));
