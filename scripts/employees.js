export const DisplayEmployees = async () => {
    const employees = await fetch("http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location").then(res => res.json());

    const customerRelationships = await fetch("http://localhost:8088/employeeCustomers?_expand=customer").then(res => res.json());
    
    const employeesHTML = `
    ${
        employees.map((employee) => {
            // Find all the customer relationships for this employee
            const relationships = customerRelationships.filter(rel => rel.employeeId === employee.id);
            
            // Find the related customer for each relationship
            const assignedCustomers = relationships.map(rel => `<li>${rel.customer.name}</li>`).join(""); 
                
            return `
                <div class="employee">
                    <header class="employee_name">
                        <h2>${employee.firstName} ${employee.lastName}</h2>
                    </header>
                    <section class="employee_computer">
                        Currently using a ${employee.computer.year} ${employee.computer.model}
                    </section>
                    <section class="employee_department">
                        Works in the ${employee.department.name} department
                    </section>
                    <section class="employee_location">
                        Works at the ${employee.location.cityName} office
                    </section>
                    <section class="employee_customers">
                        Has worked for the following customers.
                        <ul>
                            ${assignedCustomers}
                        </ul>
                    </section>
                </div>
            `;
        }).join("")
    }
    `
    return employeesHTML;
}