import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Không cần ép kiểu nữa
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f9fc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#067b63',
    marginRight: '40px',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    width: '100%',
    maxWidth: '300px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4abba4',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default styles;
