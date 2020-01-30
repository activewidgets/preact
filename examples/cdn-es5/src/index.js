
var Datagrid = ActiveWidgets.Preact.Datagrid;

var rows = [
    { framework: 'preact', source: 'CDN', language: 'ES5'}
];

var App = preact.h(Datagrid, {rows: rows});

preact.render(App, document.getElementById("app"));
