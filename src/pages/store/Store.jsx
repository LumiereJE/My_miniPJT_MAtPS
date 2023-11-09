import StoreImgBox from '../../components/page-components/Store/ImgBox';
import StoreInfo from '../../components/page-components/Store/Info';
import GlobalStyle from '../../components/style_components/Global_style';
import '../../App.css';
import StoreMap from '../../components/page-components/Store/Map';
import { FlexBox, LeftBox, RightBox } from '../../components/style_components/Store/Page-Layout';
import StoreReserve from '../../components/page-components/Store/Reserve';
import StoreMenu from '../../components/page-components/Store/Menu';
import StoreReview from '../../components/page-components/Store/Review';
import StorePost from '../../components/page-components/Store/Post';



function Store() {
  return (
    <>
      <GlobalStyle/>
      <StoreImgBox/>
      <FlexBox>
        <StoreInfo />
        <RightBox>
            <StoreMap/>
            <StoreReserve/>
        </RightBox>
      </FlexBox>
      <FlexBox>
        <LeftBox>
            <StoreMenu/>
            <StoreReview/>
        </LeftBox>
        <StorePost/>
      </FlexBox>
      
    </>
    

  );
}

export default Store;