import React from 'react';

import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import styles from '../../styles/Select.module.scss'

interface Props {
  label: string,
  value: number,
  data: {
    label: string;
    value: number;
  }[],
  disabled?: boolean,
  handleChange: (event: number) => void
}

const Select: React.VFC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<{ value: number }>) => {
    props.handleChange(event.target.value);
  };

  return (
    <FormControl className={styles.select} disabled={props.disabled}>
      <InputLabel>{props.label}</InputLabel>
      <MuiSelect
        value={props.value}
        label={props.label}
        onChange={handleChange}
      >
        {
          props.data?.map((data) => <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>)
        }
      </MuiSelect>
    </FormControl>
  )
}

export default Select;