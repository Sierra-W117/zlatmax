import Catalog from "@/components/Catalogs/Catalog";
import Catalog2 from "@/components/Catalogs/Catalog2";
import News from "@/components/Catalogs/News";
import Articles from "@/components/Catalogs/Articles";
import MainCatalog from "@/components/Catalogs/MainCatalog";

import knife from '../../public/images/knife.png'
import flashlight from '../../public/images/flashlight.png'

import PreFooter from "@/components/PreFooter";
import PostHeader from "@/components/PostHeader";



export default function Home() {
  return (
    <div>
      <PostHeader />

      <MainCatalog />
      <Catalog imageSrc={knife} mainText={'Хиты продаж'} sideText={'Перейти в каталог'}/>

      <News photo={knife}/>
      <Catalog imageSrc={knife} mainText={'Акции'} sideText={'Все акции'}/>
      <Catalog imageSrc={knife} mainText={'Акции'} sideText={'Все акции'}/>

      <News photo={knife}/>
      <Catalog imageSrc={knife} mainText={'Акции'} sideText={'Все акции'}/>
      <Catalog imageSrc={knife} mainText={'Акции'} sideText={'Все акции'}/>

      <Articles />
      <Catalog2 />
      <Catalog imageSrc={flashlight} mainText={'Фонари'} sideText={'Перейти в каталог'}/>

      
      <PreFooter />
    </div>
  );
}
