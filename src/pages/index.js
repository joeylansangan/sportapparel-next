import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Highlights from '../components/Highlights'
import ImgMenu from '../components/ImgMenu'
import Popular from '../components/Popular'
import ProductFeed from '../components/ProductFeed'
import SignupBanner from '../components/SignupBanner'

export default function Home({products}) {
  // console.log(products)
  console.log('hello')
  return (
    <div >
      <Head>
        <title>Adidas Next</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Popular />
        <ImgMenu/>
        <h1 className="uppercase adiBold text-3xl my-5 ml-5 tracking-wider">What's trending</h1>
        <ProductFeed products={products}/>

        <Highlights/>
        <SignupBanner />
        <Footer/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products');
  
  const data = await products.json();

  return {
    props: {
      products: data
    }
  }
} 