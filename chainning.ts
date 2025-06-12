interface Employee {
  name: string;
  address?: {
    city: string;
  };
}

const employee: Employee = { name: "Raj" };

console.log(emp.address?.city); 
