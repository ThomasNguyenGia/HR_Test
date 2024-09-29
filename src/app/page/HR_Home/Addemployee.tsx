import React, { useState } from 'react';
import styles from './style';

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  username: string;  // Thêm cột tên tài khoản
  password: string;  // Thêm cột mật khẩu
};

type AddEmployeeProps = {
  onAdd: (newEmployee: Employee) => void;
};

const Addemployee = ({ onAdd }: AddEmployeeProps) => {
  const [newEmployee, setNewEmployee] = useState<Employee>({
    id: 0,
    name: '',
    position: '',
    department: '',
    salary: 0,
    username: '',  // Thêm cột tên tài khoản
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: name === 'salary' ? parseInt(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newEmployee);
    setNewEmployee({ id: 0, name: '', position: '', department: '', salary: 0, username:'', password:'' });
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newEmployee.name}
        onChange={handleChange}
        placeholder="Name"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="position"
        value={newEmployee.position}
        onChange={handleChange}
        placeholder="Position"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="department"
        value={newEmployee.department}
        onChange={handleChange}
        placeholder="Department"
        style={styles.input}
        required
      />
      <input
        type="number"
        name="salary"
        value={newEmployee.salary}
        onChange={handleChange}
        placeholder="Salary"
        style={styles.input}
        required
      />
      <input
        type="text"
        name="username"
        value={newEmployee.username}
        onChange={handleChange}
        placeholder="Username"
        style={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        value={newEmployee.password}
        onChange={handleChange}
        placeholder="Password"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Add Employee</button>
    </form>
  );
  
};

export default Addemployee;