'use client';
import React from 'react';
import styles from 'src/components/resume/resume.module.css';

const Button = () =>{
  return <button className={styles.buttonPrint} onClick={e => window.print()}>Print</button>
}

export default Button;
