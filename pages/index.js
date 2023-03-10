import Head from 'next/head'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import request from '@/utils/request'


export default function Home({result}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Navbar */}
      <Navbar/>
      {/* Results */}
      <Results result={result}/>
    </>
  )
}

export async function getServerSideProps(context){
      const genre = context.query.genre || "fetchtrending";

      const requests = await fetch(`https://api.themoviedb.org/3${request[genre].url}`).then(response=>response.json())
    
     return {
      props: {result: requests.results}
     }
}