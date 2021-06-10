import Head from "next/head"

import Header from "../components/header"
import Excitment from "../components/excitment"
import Featured from "../components/featured"
import Whatyouneed from "../components/whatyouneed"
import UpgradeSection from "../components/upgradeSection"
import HoveredImages from "../components/hoveredImages"
import Plans from "../components/plans"
import Shines from '../components/shines'
import Table from "../components/table"
// import Form from "../components/Form"
import Typeform from "../components/Typeform"
import Ig from '../components/ig'
import Hype from "../components/hype"
import Footer from "../components/Footer"

import { ReactTypeformEmbed } from 'react-typeform-embed';

export default function Home() {
  return (
    <>
      <Head>
        <title>HiHome</title>
      </Head>

      <Header />
      <Excitment />
      <Featured />
      <Whatyouneed />
      <UpgradeSection />
      <HoveredImages />
      <Shines />
      <Table />
      <Plans />
      {/* <Form /> */}
      <Typeform />
      <Ig />
      <Hype />
      <Footer />
    </>
  )
}
