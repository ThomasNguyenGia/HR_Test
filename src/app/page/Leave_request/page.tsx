"use client";

import React, { useState, useEffect } from 'react';
import styles from './style'; // Import styles
import Header from '../HeaderComponent/header';

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
};

type LeaveRequest = {
  id: number;
  employeeId: number;
  reason: string;
  startDate: string;
  endDate: string;
  status?: string; // Thêm trường status để lưu trữ trạng thái
};

const LeaveRequestPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    const storedRequests = localStorage.getItem('leaveRequests');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
    if (storedRequests) {
      setLeaveRequests(JSON.parse(storedRequests));
    }
  }, []);

  const approveLeaveRequest = (id: number) => {
    const updatedRequests = leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'approved' } : request
    );

    setLeaveRequests(updatedRequests);
    localStorage.setItem('leaveRequests', JSON.stringify(updatedRequests));

    // Gửi phản hồi về EmployeePage
    const employeeId = updatedRequests.find(req => req.id === id)?.employeeId;
    if (employeeId) {
      const notification = {
        message: 'Đã duyệt thành công',
        employeeId,
      };
      localStorage.setItem(`notification_${employeeId}`, JSON.stringify(notification));
    }
    alert(`Leave request ${id} approved`);
  };

  const rejectLeaveRequest = (id: number) => {
    const updatedRequests = leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'rejected' } : request
    );

    setLeaveRequests(updatedRequests);
    localStorage.setItem('leaveRequests', JSON.stringify(updatedRequests));

    // Gửi phản hồi về EmployeePage
    const employeeId = updatedRequests.find(req => req.id === id)?.employeeId;
    if (employeeId) {
      const notification = {
        message: 'Yêu cầu không được duyệt',
        employeeId,
      };
      localStorage.setItem(`notification_${employeeId}`, JSON.stringify(notification));
    }
    alert(`Leave request ${id} rejected`);
  };

  return (
    <main style={styles.container}>
      <Header />
      <h1 style={styles.title}>Leave Request Management</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Employee Name</th>
            <th style={styles.tableHeader}>Position</th>
            <th style={styles.tableHeader}>Department</th>
            <th style={styles.tableHeader}>Reason</th>
            <th style={styles.tableHeader}>Start Date</th>
            <th style={styles.tableHeader}>End Date</th>
            <th style={styles.tableHeader}>Status</th> {/* Cột mới cho trạng thái */}
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => {
            const employee = employees.find((emp) => emp.id === request.employeeId);
            return (
              <tr key={request.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{employee ? employee.name : "Unknown Employee"}</td>
                <td style={styles.tableCell}>{employee ? employee.position : "N/A"}</td>
                <td style={styles.tableCell}>{employee ? employee.department : "N/A"}</td>
                <td style={styles.tableCell}>{request.reason}</td>
                <td style={styles.tableCell}>{request.startDate}</td>
                <td style={styles.tableCell}>{request.endDate}</td>
                <td style={styles.tableCell}>
                  {request.status === 'approved' ? (
                    <span style={{ color: 'green' }}>Đã duyệt</span>
                  ) : request.status === 'rejected' ? (
                    <span style={{ color: 'red' }}>Đã không duyệt</span>
                  ) : (
                    <>
                      <button onClick={() => approveLeaveRequest(request.id)} style={styles.button}>Duyệt</button>
                      <button onClick={() => rejectLeaveRequest(request.id)} style={styles.button}>Không Duyệt</button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default LeaveRequestPage;
