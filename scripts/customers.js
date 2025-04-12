export const DisplayCustomers = async () => {
    const customers = await fetch("http://localhost:8088/customers").then(res => res.json());
    const employeeCustomers = await fetch("http://localhost:8088/employeeCustomers?_expand=employee").then(res => res.json());

    const customerHTML = customers.map((customer) => {
        // filter out customers and their employees
        const relationships = employeeCustomers.filter(empCust => empCust.customerId === customer.id)

        const assignedEmployees = relationships.map((rel => `<li>${rel.employee.firstName} ${rel.employee.lastName}</li>`)).join("");
        
        return `
            <div class="customer">
                <header class="customer_name">
                    <h2>${customer.name}</h2>
                </header>
                <section class="assigned_employees">
                    Employees that have been assigned to this customer:
                    <ul>
                        ${assignedEmployees}
                    </ul>
                </section>
            </div>`
    }).join("");

    return customerHTML;
}