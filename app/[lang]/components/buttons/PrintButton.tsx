"use client"


import Button from 'app/[lang]/components/buttons/button';
import React from 'react';

interface Props {
  text: string
}

export const PrintButton =({text}: Props) =>{
  return <Button handleClick={e => window.print()} inscription={text}/>
}

