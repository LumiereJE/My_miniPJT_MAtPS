import ReserveOfficial from "../../components/page-components/Reserve/Official";
import { BottomBox, FlexBox, LeftBox, RightBox } from "../../components/style_components/Reserve/Page-Layout";
import { Bar } from "../../components/style_components/Store/Store-ReviewBox";
import GlobalStyle from '../../components/style_components/Global_style';
import ReserveTime from "../../components/page-components/Reserve/Time";
import ReservePerson from "../../components/page-components/Reserve/Person";
import ReserveCheck from "../../components/page-components/Reserve/Check";
import ReserveCalendar from "../../components/page-components/Reserve/Calendar";
import ReserveClientInfo from "../../components/page-components/Reserve/ClientInfo";
import ReserveSellerInfo from "../../components/page-components/Reserve/SellerInfo";
import ReserveBookingAgree from "../../components/page-components/Reserve/BookingAgree";


const Reserve = () => {
    return (
        <>
            <GlobalStyle/>
            <FlexBox>
                <LeftBox>
                    <ReserveOfficial />
                    <Bar/>
                    <ReserveCalendar />
                </LeftBox>
                <RightBox>
                    <ReserveTime />
                    <Bar />
                    <ReservePerson />
                    <Bar />
                    <ReserveCheck />
                </RightBox>
            </FlexBox>
      
            <BottomBox>
                <Bar />
                <ReserveClientInfo />
                <Bar />
                <ReserveSellerInfo />
                <Bar />
                <ReserveBookingAgree />
            </BottomBox>
  
        </>
       

   
    );
};

export default Reserve;