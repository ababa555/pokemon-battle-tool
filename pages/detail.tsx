import React from 'react';
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import PokeDetailInput from '../components/PokemonDetails/PokeDetailInput'
import PokeDetailResult from '../components/PokemonDetails/PokeDetailResult'
import Image from '../components/Images/Image'
import DetailProvider, { useDetailContext, ActionType } from '../context/DetailContext'
import styles from '../styles/Detail.module.scss'

const Detail: React.VFC = (props: any) => {
  const router = useRouter()

  const { state, dispatch } = useDetailContext();
  React.useEffect(() => {
    let x: string;
    let y: string;

    for (const [key, value] of Object.entries(router.query)) {
      if (typeof value === 'string') {
        if (value === 'n0') continue;
        if (key.substring(0, 1) === 'x' && x === undefined) {
          x = value;
        } else if  (key.substring(0, 1) === 'y' && y === undefined) {
          y = value;
        }
      }
    }

    dispatch({ type: ActionType.SET_X, payload: x })
    dispatch({ type: ActionType.SET_Y, payload: y })
  }, [router.query]);

  const renderImage = (x_or_y: string) => {   
    const renderImageImpl = () => {
      const rows = [];
      for (const [key, value] of Object.entries(router.query)) {
        if (key.substring(0, 1) === x_or_y) {
          const target = props.data.find((e: { id: string; }) => e.id === value)
          if (target) {
            const actionType = x_or_y === 'x' ? ActionType.SET_X : ActionType.SET_Y;
            rows.push(
              <span key={key} className={styles.imageWrapper}>
                <Image
                  id={target.id}
                  onClick={(e) => dispatch({ type: actionType, payload: e })}
                />
              </span>
            )
          }
        }
      }
      return rows;
    }

    return (
      <>
        {renderImageImpl()}
      </>
    )
  }

  return (
    <div className={styles.grid}>
      <div>
        {renderImage('x')}
        <PokeDetailInput identity='x' id={state.x} />
      </div>
      <div>
        {renderImage('y')}
        <PokeDetailInput identity='y' id={state.y} />
      </div>
      <div className={styles.resultWapper}>
        <PokeDetailResult />
      </div>
      {/* {props.data && props.data.map((data) => <Todo key={data.id} post={data} />)} */}
    </div>
  )
}

export default Detail;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await response.json()
  const testdata = [
    { id: 'n1', no: '001'},
    { id: 'n2', no: '002'},
    { id: 'n3', no: '003'},
    { id: 'n4', no: '004'},
    { id: 'n5', no: '005'},
    { id: 'n6', no: '006'},
  ]
  return {
    props: {
      data: testdata
    }
  }
}