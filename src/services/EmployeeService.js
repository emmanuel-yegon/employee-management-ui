import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employee/get";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }
}

export default new EmployeeService();
