// import '../styles/global.css'
import { AppProps } from 'next/app'
import Header from '../components/Header';
import StoreProvider from '../context/SearchContext'
import DetailContext from '../context/DetailContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <Header title="ポケモン対戦支援" />
        <DetailContext>
          <Component {...pageProps} />
        </DetailContext>
      </StoreProvider>
    </>
  )
}

export default App