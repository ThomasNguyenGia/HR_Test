interface Styles {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#343a40',
  },
  subtitle: {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '15px',
    color: '#495057',
    textAlign: 'center',
    fontFamily: 'ui-sans-serif',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    borderStyle: 'solid',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#495057',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    fontSize: '16px',
  },
  select: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4abba4',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#fff',
  },
  tableHeader: {
    backgroundColor: '#4abba4',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #dee2e6',
  },
  tableRow: {
    borderBottom: '1px solid #dee2e6',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
    color: '#495057',
    fontFamily: 'fangsong',
  },
};

export default styles;
