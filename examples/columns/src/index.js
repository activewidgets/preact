
import { h, render } from 'preact';
import { Datagrid } from '@activewidgets/preact';
import { northwind } from "@activewidgets/examples/data";
import './styles.css';


const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120},
  {header: 'City', field: 'city'},
  {header: 'Zip', field: 'postalCode', align: 'right'},
  {header: 'Phone', field: 'phone'},
  {header: 'Fax', field: 'fax'},
  {header: 'Country', field: 'country'}
];


function App(){
    return <Datagrid columns={columns} rows={northwind.customers} />
}


render(<App />, document.getElementById('app'));
