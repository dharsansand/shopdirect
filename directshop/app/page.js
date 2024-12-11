import { Footer, HeroBanner, Navbar } from '@/components';
import { Product } from '@/components';
import { FooterBanner } from '@/components';
import React from 'react';
 import { client } from '@/lib/client';



const Home = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  props: { products, bannerData }

  return (
 
  <div  className="layout">
  <Navbar />
<div  className="main-container">
   <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
   {console.log(bannerData)}
    <div className="products-heading">
  <h2>Best Seller Products</h2>
  <p>speaker There are many variations passages</p>
</div>
 
<div className="products-container">
{products?.map((product) => <Product key={product._id} product={product} />)}

 </div>

 <FooterBanner footerBanner={bannerData && bannerData[0]} />
 </div>
 
<Footer/>
</div>
        
  );
}
export default Home
