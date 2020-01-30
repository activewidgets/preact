
import { h } from "preact";
import * as flags from '@activewidgets/examples/flags';


export function company({data}){
    return <div>
        <div class="bold blue">{data.customerID}</div>
        <div class="small">{data.companyName}</div>
    </div>;
}

export function contact({data}){
    return <div>
        <div class="bold">{data.contactName}</div>
        <div class="small">{data.contactTitle}</div>
    </div>;
}

export function address({data}){
    return <div>
        <div class="small">{data.address}</div>
        <div class="small">{data.postalCode} <span>{data.city}</span></div>
    </div>;
}

export function country({text}){
    return <div><img src={flags[text]}/>{text}</div>;
}

export function phone({data}){
    return <div>
        <div class="small phone">{data.phone}</div>
        <div class="small fax">{data.fax}</div>
    </div>;
}
