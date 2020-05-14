
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/preact/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/preact/tree/master/examples/events)

The datagrid emits composite [mouse](https://docs.activewidgets.com/api/datagrid/mouse-event/) event 
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

- [Preact Datagrid - Get started](https://docs.activewidgets.com/guide/env/preact/#user-events)
- [API - mouse event](https://docs.activewidgets.com/api/datagrid/mouse-event/)