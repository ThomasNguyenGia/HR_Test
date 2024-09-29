import React, { useState } from 'react';
import styles from './style';

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  username: string;  // Thêm trường tài khoản
  password: string;  // Thêm trường mật khẩu
};


type EditEmployeeProps = {
  employee: Employee;
  onUpdate: (updatedEmployee: Employee) => void;
};

const Editemployee = ({ employee, onUpdate }: EditEmployeeProps) => {
  const [updatedEmployee, setUpdatedEmployee] = useState<Employee>(employee);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedEmployee);
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.subtitle}>Add/Edit Employee</h2>
      <input
        type="text"
        name="name"
        value={updatedEmployee.name}
        onChange={handleChange}
        placeholder="Name"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="position"
        value={updatedEmployee.position}
        onChange={handleChange}
        placeholder="Position"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="department"
        value={updatedEmployee.department}
        onChange={handleChange}
        placeholder="Department"
        style={styles.input}
        required
      />
      <input
        type="number"
        name="salary"
        value={updatedEmployee.salary}
        onChange={handleChange}
        placeholder="Salary"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="username"
        value={updatedEmployee.username}
        onChange={handleChange}
        placeholder="Username"
        style={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        value={updatedEmployee.password}
        onChange={handleChange}
        placeholder="Password"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Update Employee</button>
    </form>
  );
  
};

export default Editemployee;