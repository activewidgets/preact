
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
