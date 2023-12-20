'use client';
import React from 'react';
import styles from './button.module.css'

interface IButton {
  inscription: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}


const Button = ({handleClick,inscription}: IButton) =>{
  return <button className={styles.buttonPrint} onClick={handleClick}>{inscription}</button>
}

export default Button;
