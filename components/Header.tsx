import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Divider } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';

import Select from '../components/Selects/Select';
import { useStoreContext, ActionType } from './StoreContext';
import styles from '../styles/Header.module.scss'

interface Props {
  title: string,
}

const Header: React.VFC<Props> = ({ title }) => {
  const { state, dispatch } = useStoreContext()
  const router = useRouter()

  const changePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.ctrlKey) {
      window.open(location.href, '_blank', 'noopener,noreferrer')
    } else if (e.shiftKey) {
      window.open(location.href, '_blank');
    } else {
      router.push(('/'))
    }
  }

  return (
    <React.Fragment>
      <Stack direction="row">
        <Link href="/">
          <Toolbar onClick={(e) => changePage(e)}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
            >
              <span className={styles.title}>{title}</span>
            </Typography>
          </Toolbar>
        </Link>
        <span className={styles.selectWrapper}>
          <Select
            label='シリーズ'
            value={state.version}
            data={[
              { label: 'サンムーン', value: 0 },
              { label: 'ウルトラサン・ウルトラムーン', value: 1 },
              { label: 'Let’s Go! ピカチュウ・Let’s Go! イーブイ', value: 2 },
              { label: 'ソード・シールド', value: 3 },
              { label: 'ブリリアントダイヤモンド・シャイニングパール', value: 4 },
            ]}
            disabled={router.pathname === '/' ? false : true}
            handleChange={(e: number) => dispatch({ type: ActionType.SET_VERSION, payload: { version: e } })}
          />
        </span>
      </Stack>
      <Divider />
    </React.Fragment>
  );
}

export default Header;