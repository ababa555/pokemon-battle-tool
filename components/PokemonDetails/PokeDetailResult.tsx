import React from 'react';
import dynamic from 'next/dynamic'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useDetailContext } from '../../context/DetailContext'
import Image from '../Images/Image'
import styles from '../../styles/PokeDetailResult.module.scss'

// https://github.com/vercel/next.js/issues/12863
const DamageChart = dynamic(
  () => import('../Charts/DamageChart'),
  { ssr: false }
)

const PokeDetailResult = () => {
  const { state } = useDetailContext();
  return (
    <Card className={styles.root}>
      <div className={styles.grid}>
        <div>
          <CardHeader
            avatar={
              <Image id={state.x} />
            }
            title="フシギダネ"
            subheader="とくせい/攻撃技"
          />
        </div>
        <div>
          <CardHeader
            avatar={
              <Image id={state.y} />
            }
            title="フシギダネ"
            subheader="とくせい/かべ"
          />
        </div>
      </div>

      <Divider />

      <Typography>
        わざ
      </Typography>

      <CardContent>
        <div>
          <Typography>
            技名：ねこだまし
          </Typography>
        </div>
        <div>
          <Typography>
            タイプ：ノーマル
          </Typography>
        </div>
        <div>
          <Typography>
            分類：物理
          </Typography>
        </div>
        <div>
          <Typography>
            威力：40
          </Typography>
        </div>
        <div>
          <Typography>
            命中：100
          </Typography>
        </div>
        <div>
          <Typography>
            PP：10
          </Typography>
        </div>
      </CardContent>

      <Divider />

      <Typography>
        ダメージ
      </Typography>

      <CardContent>
        <DamageChart title="[通常]" />
        <DamageChart title="[急所]" />
      </CardContent>
    </Card>
  );
}

export default PokeDetailResult;