```mermaid
erDiagram

Employees ||--|| Computers : "uses"
Employees }o--|| Departments : "works in"
Employees }o--|| Locations : "works at"
Employees ||--o{ EmployeeCustomers : "assigned to"
Customers ||--o{ EmployeeCustomers : "served by"



Employees {
    int id pk
    varchar firstName
    varchar lastName
    int age
    int computerId fk
    int departmentId fk
    int locationId fk
}

Computers {
    int id pk
    varchar model
    int year
}

Departments {
    int id pk
    varchar name
}

Locations {
    int id pk
    varchar cityName
    varchar state
}

Customers {
    int id pk
    varchar name
}

EmployeeCustomers {
    int id pk
    int customerId fk
    int employeeId fk
}