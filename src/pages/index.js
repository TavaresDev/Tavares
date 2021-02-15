import Head from 'next/head'
import AboutInfo from '../components/AboutInfo'
import AboutWork from '../components/AboutWork'
import Hero from '../components/Hero'
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
  // console.log(articles)

  const name = 'Tavares'
  const subTitle = 'Slogan'
  return (
    <>
      <Hero heroTitle={name} subTitle={subTitle}/>
      <AboutWork/>
      <AboutInfo text1='here is some text about me company' text2='here is some text about me company'/>
      <AboutInfo bg='bg-info' order={'order-lg-2 order-md-1'} text1='here is some text about me company' text2='here is some text about me company'/>


   
     
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles

//     }
//   }

// }
