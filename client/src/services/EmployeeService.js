import axios from 'axios';

class EmployeeService {

    getEmployees(){
        return axios.get("http://localhost:3001/");
    }

    createEmployee(employee){
        return axios.post("http://localhost:3001/employee",employee);
    }

    getEmployeeById(employeeId){
        return axios.post("http://localhost:3001/employee_view/"+employeeId+"");
    }

    updateEmployee(employee){
        return axios.post("http://localhost:3001/employee_update",employee);
    }

    deleteEmployee(employeeId){
        return axios.post("http://localhost:3001/employee_delete/"+employeeId+"");
    }
    
}

export default new EmployeeService()

