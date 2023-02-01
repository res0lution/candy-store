import BestSellers from "@/components/BestSellers";
import DiscoverMore from "@/components/DiscoverMore";
import GetThemNow from "@/components/GetThemeNow";
import Layout from "@/components/Layout";
import ShopProducts from "@/components/ShopProducts";

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
      <ShopProducts />
      <DiscoverMore />
    </Layout>
  )
}