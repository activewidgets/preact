
[Open fullscreen](https://preact.activewidgets.com/events/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/events) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/preact/tree/master/examples/events?file=src/index.jsx)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```js
function onMouse({row, column}){
    alert(`row ${row.key} clicked!`);
}

function App(){
    return <Datagrid columns={columns} rows={rows} onMouse={onMouse} />
}
```

Read more:

- [Preact Datagrid - Get started](https://activewidgets.com/guide/env/preact/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)