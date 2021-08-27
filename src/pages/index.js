import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import axios from 'axios';

export default function Home({ products }) {
  // console.log(products)
  return (
    <div >
      <Head>
        <title>Adidas Next</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  // const options = {
  //   method: 'GET',
  //   url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
  //   params: {limit: '25'},
  //   headers: {
  //     'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
  //     'x-rapidapi-key': '8c0deb8a3cmsh3c8bfc1c21112b1p165876jsn65a9926a8bee'
  //   }
  // };

  const response = await fetch('https://fakestoreapi.com/products')

  const data = await response.json()

    return {
      props: {
        products: data
      }
    }
  
}