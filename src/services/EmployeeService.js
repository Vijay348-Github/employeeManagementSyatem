import axios from 'axios';

const emp_api_url = 'http://localhost:9090/api/employees';

class EmployeeService{

    getEmployee(){
        return axios.get(emp_api_url);
    }

    addEmployee(employee){
        return axios.post(emp_api_url , employee);
    }

    getEmployeeById(employeeId){
        return axios.get(emp_api_url + '/' + employeeId);
    }
}
export default new EmployeeService();