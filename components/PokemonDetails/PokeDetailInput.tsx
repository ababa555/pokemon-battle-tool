import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import GenericComboBox from '../ComboBox/GenericComboBox';
import Image from '../Images/Image'
import styles from '../../styles/PokeDetailInput.module.scss'

interface Props {
  identity: string,
  id: string,
}
const PokeDetailInput: React.VFC<Props> = (props) => {
  return (
    <Card className={styles.root}>
      <CardHeader
        avatar={
          <Image id={props.id} />
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="フシギダネ"
        subheader="くさ/どく"
      />

      <Divider />

      <CardContent>
        <div className={styles.grid}>
          <Typography>
            わざ
          </Typography>
          <GenericComboBox 
            id={`waza_${props.identity}`}
            data={moves}
            onChange={x => console.log(x)} 
          />
        </div>

        <div className={styles.grid}>
          <Typography>
            とくせい
          </Typography>
          <GenericComboBox 
            id={`tokusei_${props.identity}`}
            data={tokusei}
            onChange={x => console.log(x)} 
          />
        </div>

        <div className={styles.grid}>
          <Typography>
            もちもの
          </Typography>
          <GenericComboBox 
            id={`item_${props.identity}`}
            data={items}
            onChange={x => console.log(x)} 
          />
        </div>
      </CardContent>

      <Divider />

      <Typography>
        攻撃
      </Typography>
      
      <CardContent>
        <div className={styles.grid}>
          <Typography>
            個体値
          </Typography>
          <GenericComboBox 
            id={`kotai_attack_${props.identity}`}
            data={kotai}
            onChange={x => console.log(x)} 
          />
        </div>
        <div className={styles.grid}>
          <Typography>
            努力値
          </Typography>
          <GenericComboBox 
            id={`doryoku_attack_${props.identity}`}
            data={doryoku}
            onChange={x => console.log(x)} 
          />
        </div>
        <div className={styles.grid}>
          <Typography>
            性格補正
          </Typography>
          <GenericComboBox 
            id={`hosei_attack_${props.identity}`}
            data={hosei}
            onChange={x => console.log(x)} 
          />
        </div>
        <div className={styles.grid}>
          <Typography>
            ランク
          </Typography>
          <GenericComboBox 
            id={`rank_attack_${props.identity}`}
            data={rank}
            onChange={x => console.log(x)} 
          />
        </div>
      </CardContent>

      <Divider />

      <Typography>
        HP
      </Typography>
      <CardContent>
        <div className={styles.grid}>
          <Typography>
            個体値
          </Typography>
          <GenericComboBox 
            id={`kotai_hp_${props.identity}`}
            data={kotai}
            onChange={x => console.log(x)} 
          />
        </div>
        <div className={styles.grid}>
          <Typography>
            努力値
          </Typography>
          <GenericComboBox 
            id={`doryoku_hp_${props.identity}`}
            data={doryoku}
            onChange={x => console.log(x)} 
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default PokeDetailInput;

const moves = [
  { id: 1, value: 'はっぱカッター' },
  { id: 2, value: 'ソーラービーム' },
]

const tokusei = [
  { id: 1, value: 'しんりょく' },
  { id: 2, value: 'ようりょくそ' },
]

const items = [
  { id: 1, value: 'いのちのたま' },
  { id: 2, value: 'こだわりハチマキ' },
]

const kotai = [
  { id: 1, value: '31' }, { id: 2, value: '30' },
]

const doryoku = [
  { id: 1, value: '252' }, { id: 2, value: '248' },
]

const hosei = [
  { id: 1, value: '↑' }, { id: 2, value: '→' }, { id: 3, value: '↓' }
]

const rank = [
  { id: 1, value: '+4' }, { id: 2, value: '+3' }, { id: 3, value: '+2' }
]
