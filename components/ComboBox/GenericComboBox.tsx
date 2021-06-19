import React from 'react';
import TextField from '@material-ui/core/TextField';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
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
        props.onChange({id: null, value: null})
        return
      }
      props.onChange(newValue)
    },
  });

  return (
    <div>
      <div {...getRootProps()}>
        <TextField 
          variant="outlined" 
          // こうする事で、chromeのautocompleteを無効にできるみたい
          inputProps={{
            autoComplete: 'new-password',
          }} 
          {...getInputProps()} />
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
