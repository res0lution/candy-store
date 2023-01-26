import BestSellers from "@/components/BestSellers";
import GetThemNow from "@/components/GetThemeNow";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <BestSellers />
      <GetThemNow />
    </Layout>
  )
}