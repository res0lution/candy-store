import RecommendedProducts from '@/components/RecomendedProducts'
import Layout from '@/components/Layout'

const Cart = () => {
  return (
    <Layout>
      <div className='bg-custom'>
        <RecommendedProducts />
      </div>
    </Layout>
  )
}

export default Cart