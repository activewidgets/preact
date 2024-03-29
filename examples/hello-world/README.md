
[Open fullscreen](https://preact.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/preact/tree/master/examples/hello-world?file=src/index.jsx)

This is a small example to get started with ActiveWidgets datagrid.

First, import the component classes:

```js
import { Datagrid } from '@activewidgets/preact';
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```js
function App(){
    return <Datagrid rows={rows} />
}
```

Thats all! 

Read more:

 - [Preact Datagrid - Get started](https://activewidgets.com/guide/env/preact/)