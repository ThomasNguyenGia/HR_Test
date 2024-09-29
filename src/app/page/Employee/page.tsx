"use client";

import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Input, DatePicker, Typography, notification } from 'antd';
import moment from 'moment';
import Header from '../HeaderComponent/headeremployee';
import styles from './style'; // Import style

// Các kiểu dữ liệu
type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  username: string;
  password: string;
};

type LeaveRequest = {
  id: number;
  employeeId: number;
  reason: string;
  startDate: string;
  endDate: string;
  status: string; // "approved" | "rejected" | "pending"
};

type LeaveFormValues = {
  leaveReason: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
};

const { Title } = Typography;
const { TextArea } = Input;

const EmployeePage = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [leaveRequestSuccess, setLeaveRequestSuccess] = useState(false);

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    const currentUsername = localStorage.getItem('currentUsername');

    if (storedEmployees && currentUsername) {
      const employees = JSON.parse(storedEmployees);
      const currentEmployee = employees.find((emp: Employee) => emp.username === currentUsername);
      setEmployee(currentEmployee);

      if (currentEmployee) {
        const storedRequests = localStorage.getItem('leaveRequests');
        const allRequests = storedRequests ? JSON.parse(storedRequests) : [];
        const employeeRequests = allRequests.filter((req: LeaveRequest) => req.employeeId === currentEmployee.id);
        setLeaveRequests(employeeRequests);

        const storedNotification = localStorage.getItem(`notification_${currentEmployee.id}`);
        if (storedNotification) {
          const notification = JSON.parse(storedNotification);
          setNotificationMessage(notification.message);
          localStorage.removeItem(`notification_${currentEmployee.id}`);
        }
      }
    }
  }, []);

  const submitLeaveRequest = (values: LeaveFormValues) => {
    if (employee) {
      const { leaveReason, startDate, endDate } = values;
      const newLeaveRequest: LeaveRequest = {
        id: Date.now(),
        employeeId: employee.id,
        reason: leaveReason,
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
        status: 'pending',
      };

      const storedRequests = localStorage.getItem('leaveRequests');
      const allRequests = storedRequests ? JSON.parse(storedRequests) : [];
      allRequests.push(newLeaveRequest);
      localStorage.setItem('leaveRequests', JSON.stringify(allRequests));
      setLeaveRequests(allRequests);
      setLeaveRequestSuccess(true);

      notification.success({
        message: 'Leave Request Submitted',
        description: `Leave request for ${leaveReason} from ${startDate.format('YYYY-MM-DD')} to ${endDate.format('YYYY-MM-DD')} has been submitted.`,
      });
    } else {
      notification.error({
        message: 'Submission Failed',
        description: 'Employee data not found.',
      });
    }
  };

  const employeeColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    { title: 'Department', dataIndex: 'department', key: 'department' },
    { title: 'Salary', dataIndex: 'salary', key: 'salary', render: (salary: number) => `${salary} VNĐ` },
  ];

  const leaveRequestColumns = [
    { title: 'Reason', dataIndex: 'reason', key: 'reason' },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
    { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status: string) => (
      <span style={{ color: status === 'approved' ? 'green' : status === 'rejected' ? 'red' : 'orange' }}>
        {status}
      </span>
    )},
  ];

  return (
    <div>
      <Header />
      <Title level={2}>Employee Dashboard</Title>

      {employee ? (
        <>
          <Table
            dataSource={[employee]}
            columns={employeeColumns}
            pagination={false}
            rowKey="id"
            style={{ marginBottom: '30px' }}
          />

          {notificationMessage && (
            <div style={{ marginBottom: '20px' }}>
              <Typography.Text type="success" strong>
                {notificationMessage}
              </Typography.Text>
            </div>
          )}

          {leaveRequestSuccess && (
            <div style={styles.successMessage}>
              <Typography.Text type="success" strong>
                Leave request has been successfully submitted!
              </Typography.Text>
            </div>
          )}

          <Title level={3}>Request Leave</Title>
          <Form layout="vertical" onFinish={submitLeaveRequest}>
            <Form.Item
              label="Leave Reason"
              name="leaveReason"
              rules={[{ required: true, message: 'Please enter your reason for leave!' }]}
            >
              <TextArea
                placeholder="Enter your reason for leave"
                rows={4}
              />
            </Form.Item>

            <Form.Item
              label="Start Date"
              name="startDate"
              rules={[{ required: true, message: 'Please select a start date!' }]}
            >
              <DatePicker style={styles.datePicker} />
            </Form.Item>

            <Form.Item
              label="End Date"
              name="endDate"
              rules={[{ required: true, message: 'Please select an end date!' }]}
            >
              <DatePicker style={styles.datePicker} />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit Leave Request
            </Button>
          </Form>

          <Title level={3} style={styles.leaveRequestHistory}>Leave Request History</Title>
          <Table
            dataSource={leaveRequests}
            columns={leaveRequestColumns}
            rowKey="id"
            pagination={false}
          />
        </>
      ) : (
        <Typography.Text>No employee information available.</Typography.Text>
      )}
    </div>
  );
};

export default EmployeePage;
