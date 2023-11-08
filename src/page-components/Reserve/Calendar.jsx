import { Title } from "../../style_components/Reserve/Reserve-Common";
import { CalendarSetting, ContainerBox } from "../../style_components/Reserve/Reserve-Calendar";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
// onChange가 함수가 아니래 ㅠㅠ 클릭하면 날짜 표시 되어야하는데 ㅠㅠ 
const ReserveCalendar = ({ onChange, value }) => {
    const [nowDate, setNowDate] = useState("일정 선택");
    
    const handleDateChange = (selectedDate) => {
        onChange(selectedDate);
        setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
    };
    return (
        <ContainerBox>
            <CalendarSetting>
                <Title>{nowDate}</Title>
                {/* onChange가 setValue역할을 함 */}
                <Calendar
                    onChange={handleDateChange} 
                    value={value}
                    formatDay={(locale, date) => moment(date).format("DD")}>
                </Calendar>
            </CalendarSetting>
        </ContainerBox>
    );
};
export default ReserveCalendar;