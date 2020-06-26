
### 

# ActiveWidgets/Preact • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/preact)](https://www.npmjs.com/package/@activewidgets/preact "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/preact)](https://www.npmjs.com/package/@activewidgets/preact "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/preact)](https://github.com/activewidgets/preact/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/preact?label=GitHub&style=social)](https://github.com/activewidgets/preact "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides **datagrid component** for **Preact**.

[Live demo](https://preact.activewidgets.com) / [Developer guide](https://activewidgets.com/guide/) / [API reference](https://activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://preact.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [CDN links](#cdn-links)
- [Data properties](#data-properties)
- [User events](#user-events)


## Installation

Add [@activewidgets/preact](https://activewidgets.com/api/packages/preact/) to your project dependencies -

```sh
> npm i --save @activewidgets/preact
```

## Usage

Now you can import ActiveWidgets component classes -

```js
import { Datagrid } from "@activewidgets/preact";
```

and use them as any standard Preact component.

```js
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
```

[Live example](https://preact.activewidgets.com/examples/local/hello-world/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/preact/tree/master/examples/hello-world)

## CDN links

For quick prototyping the package is also available over ActiveWidgets CDN -

```html
<script src="https://cdn.activewidgets.com/preact"></script>
```

In this case you will find the components at `ActiveWidgets.Preact` global namespace.

```js
var Datagrid = ActiveWidgets.Preact.Datagrid;

var rows = [
    { framework: 'preact', source: 'CDN', language: 'ES5'}
];

var App = preact.h(Datagrid, {rows: rows});
preact.render(App, document.getElementById("app"));
```

[Live example](https://preact.activewidgets.com/examples/local/cdn-es5/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/cdn-es5) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/preact/tree/master/examples/cdn-es5)

## Data properties

You have to provide [columns](https://activewidgets.com/api/datagrid/columns/) and [rows](https://activewidgets.com/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](https://activewidgets.com/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](https://activewidgets.com/api/datagrid/columns/#header) - column header (string|object)
- [width](https://activewidgets.com/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](https://activewidgets.com/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](https://activewidgets.com/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](https://activewidgets.com/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```js
const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120, align: 'right'}
];

const rows = northwind.customers;

function App(){
    return <Datagrid columns={columns} rows={rows} />
}
```

[Live example](https://preact.activewidgets.com/examples/local/columns/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/preact/tree/master/examples/columns)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](https://activewidgets.com/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action -

```js
function onMouse({row, column}){
    alert(`row ${row.key} clicked!`);
}

function App(){
    return <Datagrid onMouse={onMouse} columns={columns} rows={rows} />
}
```

[Live example](https://preact.activewidgets.com/examples/local/events/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/preact/tree/master/examples/events)


## More info

- [Live demo](https://react.activewidgets.com) 
- [Developer guide](https://activewidgets.com/guide/) 
- [API reference](https://activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 
