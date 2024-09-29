import React from 'react';
import { FaUser } from 'react-icons/fa'; // Cài đặt thư viện icon nếu cần
import styles from './style'; // Import styles từ style.ts

const Header: React.FC = () => {
  const handleLogout = () => {
    // Điều hướng về trang đăng nhập
    window.location.href = '/'; // Cập nhật đường dẫn
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.leftSection}>
        <h1 style={styles.logo}>HR TEST</h1>
        <div style={styles.navLinks}>
          <span style={styles.navLink} onClick={() => window.location.href='/page/HR_Home'}>Trang Chủ</span>
          <span style={styles.navLink} onClick={() => window.location.href='/page/Leave_request'}>Yêu Cầu Nghỉ Phép</span>
        </div>
      </div>
      <div style={styles.rightSection}>
        <button style={styles.loginButton} onClick={handleLogout}>
          <FaUser className="icon" />
          Đăng Xuất
        </button>
      </div>
    </header>
  );
};

export default Header;
