import React from 'react';
import styles from './style';

type DeleteEmployeeProps = {
  id: number;
  onDelete: (id: number) => void;
};

const Deleteemployee = ({ id, onDelete }: DeleteEmployeeProps) => {
  return (
    <button style={styles.button} onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default Deleteemployee;