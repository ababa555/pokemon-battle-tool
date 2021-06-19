import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
        { ...props }
      >
        {
          props.data?.map((data) => <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>)
        }
      </MuiSelect>
    </FormControl>
  )
}

export default Select;