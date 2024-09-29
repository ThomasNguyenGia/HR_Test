interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
    color: '#4abba4',
    marginBottom: '10px',
    marginRight: '1000px',
    fontFamily: 'ui-sans-serif',
    fontWeight: 'bold',
  },
  table: {
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  tableHeader: {
    backgroundColor: '#4abba4',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    fontFamily: 'fangsong',
  },
  form: {
    margin: '20px auto',
    padding: '20px',
    width: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#4abba4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default styles;
