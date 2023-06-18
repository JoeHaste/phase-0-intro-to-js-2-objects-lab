// Write your solution in this file!
const employee = {
    Sam: {
        name: 'Sam',
        address: '11 Broadway',
    }
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
    [key]: value}
}

const employee1 = updateEmployeeWithKeyAndValue(
    employee.Sam, 'name','Brad'
);{
    console.log(employee1)
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee,
    object:key}
    
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

