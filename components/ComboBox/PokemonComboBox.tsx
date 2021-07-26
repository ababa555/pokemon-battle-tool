import React from 'react';

import TextField from '@material-ui/core/TextField';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import styles from '../../styles/PokeTextBox.module.scss'

import Image from '../../components/Images/Image'

interface Props {
  index: string,
  data?: {
    id: string,
    no: string,
    name: string
  },
  onChange: any
}

const PokemonComboBox: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState(null);
  const textFieldRef = React.useRef(null);

  React.useEffect(() => {
    if (props.data) {
      setSelected(props.data);
    }
    const textField = textFieldRef.current;
    textField.addEventListener('keydown', handleKeyPress);

    return () => {
      textField.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  // Ctrl+Xでテキストフィールドをクリアする
  const handleKeyPress = e => {
    if (e.ctrlKey && e.keyCode === 88) {
      setSelected({ ...selected, name: "" });
    }
  };

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: props.index,
    options: testdata,
    getOptionLabel: (option: any) => {
      if (typeof option === 'string') {
        return option;
      }
      if (option.inputValue) {
        return option.inputValue;
      }
      return option.name;
    },
    onChange: (event, newValue) => {
      setSelected(newValue);
      if (newValue === null) {
        props.onChange({ id: null, no: null, name: null })
        return
      }
      props.onChange(newValue)
    },
    onInputChange: (props, input) => {
      setSelected({ ...selected, name: input });
      return
    }
  });

  return (
    <div>
      <div {...getRootProps()}>
        <TextField variant="outlined" {...getInputProps()} value={selected ? selected.name : ""} inputRef={textFieldRef} />
        {
          (selected !== null && selected.id) ?
            <Image
              id={selected.id}
              width={48}
              height={48}
            /> :
            <span className={styles.emptyImage} />}
      </div>
      {groupedOptions.length > 0 ? (
        <ul className={styles.listBox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li className={styles.listItem} {...getOptionProps({ option, index })}>
              {option.name}
              <Image
                id={option.id}
                className={styles.listItemImage}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default PokemonComboBox;

const testdata = [
  { id: 'n1', no: '001', name: 'フシギダネ' },
  { id: 'n2', no: '002', name: 'フシギソウ' },
  { id: 'n3', no: '003', name: 'フシギバナ' },
  { id: 'n4', no: '004', name: 'ヒトカゲ' },
  { id: 'n5', no: '005', name: 'リザード' },
  { id: 'n6', no: '006', name: 'リザードン' },
  { id: 'n7', no: '007', name: 'ゼニガメ' },
  { id: 'n8', no: '008', name: 'カメール' },
  { id: 'n9', no: '009', name: 'カメックス' },
];