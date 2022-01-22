// import '../styles/global.css'
import { AppProps } from 'next/app'
import Header from '../components/Header';
import { SearchProvider } from '../context/SearchContext'
import { DetailProvider } from '../context/DetailContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchProvider>
        <Header title="ポケモン対戦支援" />
        <DetailProvider>
          <Component {...pageProps} />
        </DetailProvider>
      </SearchProvider>
    </>
  )
}

export default App