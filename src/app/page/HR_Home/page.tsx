"use client";

import React, { useEffect, useState } from "react";
import AddEmployee from "./Addemployee";
import EditEmployee from "./Editemployee";
import DeleteEmployee from "./Deleteemployee";
import styles from "./style"; // Nhập styles
import Header from "../HeaderComponent/header";

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  username: string;  // Thêm cột tên tài khoản
  password: string;  // Thêm cột mật khẩu
};

const Homepage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showAddEmployee, setShowAddEmployee] = useState(false); // Trạng thái để kiểm soát hiển thị bảng thêm nhân viên
  const [showEditEmployee, setShowEditEmployee] = useState(false); // Trạng thái để kiểm soát hiển thị bảng chỉnh sửa nhân viên

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const saveEmployeesToLocalStorage = (updatedEmployees: Employee[]) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const addEmployee = (newEmployee: Employee) => {
    const updatedEmployees = [
      ...employees,
      { 
        ...newEmployee, 
        id: employees.length + 1,
        username: newEmployee.username,  // Lưu tài khoản
        password: newEmployee.password,  // Lưu mật khẩu
      },
    ];
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
    setShowAddEmployee(false); // Ẩn bảng thêm nhân viên sau khi thêm thành công
  };

  const deleteEmployee = (id: number) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    saveEmployeesToLocalStorage(updatedEmployees);
    setSelectedEmployee(null); // Ẩn bảng chỉnh sửa sau khi cập nhật thành công
    setShowEditEmployee(false); // Ẩn bảng chỉnh sửa
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowEditEmployee(true); // Hiển thị bảng chỉnh sửa
  };

  const handleAddEmployeeToggle = () => {
    setShowAddEmployee(!showAddEmployee); // Chuyển đổi trạng thái hiển thị bảng thêm nhân viên
  };

  return (
    <main style={styles.container}>
      <Header />
      <h1 style={styles.title}>Human Resource Management System</h1>
      <h2 style={styles.subtitle}>Employee List</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Position</th>
            <th style={styles.tableHeader}>Department</th>
            <th style={styles.tableHeader}>Salary</th>
            <th style={styles.tableHeader}>Username</th> {/* Thêm cột tài khoản */}
            <th style={styles.tableHeader}>Password</th> {/* Thêm cột mật khẩu */}
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{employee.id}</td>
              <td style={styles.tableCell}>{employee.name}</td>
              <td style={styles.tableCell}>{employee.position}</td>
              <td style={styles.tableCell}>{employee.department}</td>
              <td style={styles.tableCell}>
                {employee.salary.toLocaleString('vi-VN')} VNĐ
              </td>
              <td style={styles.tableCell}>{employee.username}</td> {/* Hiển thị tài khoản */}
              <td style={styles.tableCell}>{employee.password}</td> {/* Hiển thị mật khẩu */}
              <td style={styles.tableCell}>
                <button style={styles.button} onClick={() => handleEdit(employee)}>Edit</button>
                <DeleteEmployee id={employee.id} onDelete={deleteEmployee} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button style={styles.button} onClick={handleAddEmployeeToggle}>
        {showAddEmployee ? "Cancel" : "Add Employee"}
      </button>

      {showAddEmployee && <AddEmployee onAdd={addEmployee} />} {/* Hiển thị bảng thêm nhân viên nếu showAddEmployee là true */}

      {showEditEmployee && selectedEmployee && (
        <EditEmployee employee={selectedEmployee} onUpdate={updateEmployee} />
      )} {/* Hiển thị bảng chỉnh sửa nhân viên nếu showEditEmployee là true */}
    </main>
  );
};

export default Homepage;
