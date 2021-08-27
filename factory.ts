interface Employee {
    salary: number;
}

class PartTimeEmployee implements Employee {
    salary: number;

    constructor() {
        this.salary = 11;
    }
}

class FullTimeEmployee implements Employee{
    salary: number;

    constructor() {
        this.salary = 30;
    }
}

interface CreateEmployee {
    getEmployee(): Employee;
}

class CreatePartTimeEmployee implements CreateEmployee{
    getEmployee() {
        return new PartTimeEmployee();
    }
}

class CreateFullTimeEmployee implements CreateEmployee{
    getEmployee() {
        return new FullTimeEmployee();
    }
}

function run() {
    const pTFactory = new CreatePartTimeEmployee();
    const fTFactory = new CreateFullTimeEmployee();

    console.log("the part time employee salary is :");
    console.log(pTFactory.getEmployee().salary);

    console.log("the full time employee salary is :");
    console.log(fTFactory.getEmployee().salary);
}

run();