"use client";

import React, { useState, useEffect } from 'react';
import styles from './style'; // Import styles

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  username: string;
  password: string;
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Lấy danh sách nhân viên từ localStorage
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleLogin = () => {
    // Xóa thông báo lỗi trước khi kiểm tra
    setUsernameError('');
    setPasswordError('');

    // Kiểm tra trường nhập
    if (!username) {
      setUsernameError('Username is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }

    // Nếu có lỗi, không tiến hành đăng nhập
    if (!username || !password) {
      return;
    }

    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === 'adminpassword') {
      // Điều hướng đến trang admin nếu đăng nhập là admin
      window.location.href = '/page/HR_Home'; // Cập nhật đường dẫn
    } else {
      // Kiểm tra thông tin tài khoản nhân viên
      const employee = employees.find(emp => emp.username === username && emp.password === password);
      if (employee) {
        // Lưu tên người dùng vào localStorage
        localStorage.setItem('currentUsername', username);
        // Điều hướng đến trang nhân viên nếu thông tin chính xác
        window.location.href = '/page/Employee'; // Cập nhật đường dẫn
      } else {
        setUsernameError('Invalid username or password');
        setPasswordError('Invalid username or password');
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>HR TEST, LOGIN</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      {usernameError && <div style={{ color: 'red', marginTop: '5px' }}>{usernameError}</div>} {/* Hiển thị lỗi username */}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      {passwordError && <div style={{ color: 'red', marginTop: '5px' }}>{passwordError}</div>} {/* Hiển thị lỗi password */}

      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
};

export default LoginPage;
