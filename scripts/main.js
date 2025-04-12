import { DisplayCustomers } from "./customers.js";
import { DisplayEmployees } from "./employees.js";

const container = document.querySelector("#container");

const render = async () => {

    const employees = await DisplayEmployees();
    const customers = await DisplayCustomers();

    const composedHTML = `
        <h1>Three Blind Mice Consulting</h1>
        <h2>Employees</h2>
        ${employees}
        <h2>Customers</h2>
        ${customers}
    `

    container.innerHTML = composedHTML;
}

render();