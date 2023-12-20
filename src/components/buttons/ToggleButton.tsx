import {useState} from 'react';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons( ) {
  const [alignment, setAlignment] = React.useState<string | null>('left');


  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size="small"
      color="primary"
    >
      <ToggleButton value="left" aria-label="left aligned">
        En
      </ToggleButton>
      <ToggleButton value="right" aria-label="centered">
        Ru
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
