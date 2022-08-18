import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    getEmployeeByDepartmentID(departmentID){
        return axios.get(EMPLOYEE_API_BASE_URL + '/departmentID/' + departmentID);
    }

    getEmployeeByDepartmentNameBirthDate(DepartmentName, BirthDate){
        return axios.get(EMPLOYEE_API_BASE_URL + '/departmentName/' + DepartmentName +'/'+ BirthDate);
    }


    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()