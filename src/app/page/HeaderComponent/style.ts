interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4abba4', // Màu nền của header
    color: 'white', // Màu chữ
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '20px',
    fontWeight: 'bold', // Khoảng cách giữa logo và liên kết
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    marginRight: '15px', // Khoảng cách giữa các liên kết
    cursor: 'pointer', // Con trỏ khi hover
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'transparent', // Nền trong suốt
    border: 'none', // Bỏ viền
    color: 'white', // Màu chữ
    cursor: 'pointer', // Con trỏ khi hover
    display: 'flex',
    alignItems: 'center',
  },
};

export default styles;
