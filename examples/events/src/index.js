
import { h, render } from 'preact';
import { Datagrid } from '@activewidgets/preact';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


function App(){
    return <Datagrid columns={columns} rows={rows} onMouse={onMouse} />
}


render(<App />, document.getElementById('app'));
