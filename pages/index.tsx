import React from 'react';
import { Container, Divider, Grid } from '@material-ui/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import Button from '../components/Buttons/Button';
import PokemonComboBox from '../components/ComboBox/PokemonComboBox';
import StoreProvider, { StoreContext, ActionType } from '../components/StoreContext'
import styles from '../styles/App.module.scss'

interface Props {
  data?: InferGetStaticPropsType<typeof getStaticProps>
}

const App: React.VFC<Props> = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  const router = useRouter()

  React.useEffect(() => {
    dispatch({ type: ActionType.RESET })
  }, [])

  const createQuery = () => {
    const p = (index: string) => {
      const x_or_y = index.substr(0, 1)
      const selected = state[x_or_y].find((x: { index: string; }) => x.index === index)
      return selected ? selected.id : 'n0'
    }
    return {
      x0: p('x0'), x1: p('x1'), x2: p('x2'), x3: p('x3'), x4: p('x4'), x5: p('x5'), 
      y0: p('y0'), y1: p('y1'), y2: p('y2'), y3: p('y3'), y4: p('y4'), y5: p('y5'), 
      version: state.version,
    }
  }

  return (
    <Container>
      <div className={styles.main}>
        {renderPokeTextBox()}
      </div>
      <div className={styles.button}>
        <Button text="VS" onClick={() => {
          router.push({ 
            pathname: '/detail',
            query: createQuery()
         })
        }} />
      </div>
    </Container>
  );
}

const renderPokeTextBox = () => {
  const { dispatch } = React.useContext(StoreContext)
  const items = [];
    for (let i = 0; i < 6; i++) {
      const x_index = "x"+ i
      const y_index = "y"+ i
      items.push(
        <Grid key={i} container justifyContent="center" spacing={2}>
          <Grid item className={styles.gridItem}>
            <PokemonComboBox id={x_index} onChange={x => {
              x.index = x_index
              dispatch({ type: ActionType.SET_X, payload: { x: x } })
            }} />
          </Grid>
          <span className={styles.separate} />
          <Grid item>
            <PokemonComboBox id={y_index} onChange={y => {
              y.index = y_index
              dispatch({ type: ActionType.SET_Y, payload: { y: y } })
            }} />
          </Grid>
        </Grid>
      )
    }
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

export default App;
