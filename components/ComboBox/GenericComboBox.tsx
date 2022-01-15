import React from 'react';
import TextField from '@mui/material/TextField';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import styles from '../../styles/GenericTextBox.module.scss'

interface Props {
  id: string,
  data: DataProps[],
  onChange: (event: DataProps) => void,
}

interface DataProps {
  id: string | number;
  value: string;
}

const GenericComboBox: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState(null);
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: props.id,
    options: props.data,
    getOptionLabel: (option: any) => {
      if (typeof option === 'string') {
        return option;
      }
      if (option.inputValue) {
        return option.inputValue;
      }
      return option.value;
    },
    onChange: (event, newValue) => {
      setValue(newValue);
      if (newValue === null) {
        props.onChange({ id: null, value: null })
        return
      }
      props.onChange(newValue)
    },
  });
  const inputProps = {};

  // こうする事で、chromeのautocompleteを無効にできるみたい
  Object.assign(inputProps, { ...getInputProps() }, { autoComplete: 'new-password' })
  return (
    <div>
      <div {...getRootProps()}>
        <TextField
          variant="outlined"
          inputProps={inputProps} />
      </div>
      {groupedOptions.length > 0 ? (
        <ul className={styles.listBox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li className={styles.listItem} {...getOptionProps({ option, index })}>
              {option.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default GenericComboBox;
