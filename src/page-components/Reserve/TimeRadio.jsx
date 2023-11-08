import { StyledLabel, StyledRadio } from "../../style_components/Reserve/Reserve-TimeRadio";
import { useState } from "react";


const TimeRadio = () => {

  const [color, setColor] = useState(true);


  // this.state.selectValue의 값을 이벤트가 발생한 타깃의 값으로 변경
  const handleChange = (event) => {
    setColor(event.target.value);
  }
  const [selectedValue, setSelectedValue] = useState("13:00"); // 초기 선택값 설정

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value); // 선택한 값을 업데이트
  };

  return (
      <StyledLabel>
            <StyledRadio>
              <label htmlFor="time1">
                <input type="radio" id="time1" name="reserveTime"  onChange={handleChange} />
                <span>6:00</span>
              </label>
              <label htmlFor="time2">
                <input type="radio" id="time2" name="reserveTime"  onChange={handleChange} />
                <span>6:30</span>
              </label>
              <label htmlFor="time3">
                <input type="radio" id="time3" name="reserveTime"  onChange={handleChange} />
                <span>7:00</span>
              </label>
              <label htmlFor="time4">
                <input type="radio" id="time4" name="reserveTime" onChange={handleChange} />
                <span>7:30</span>
              </label>
              <label htmlFor="time5">
                <input type="radio" id="time5" name="reserveTime" onChange={handleChange} />
                <span>8:00</span>
              </label>
              <label htmlFor="time6">
                <input type="radio" id="time6" name="reserveTime" onChange={handleChange} />
                <span>8:30</span>
              </label>
              <label htmlFor="time7">
                <input type="radio" id="time7" name="reserveTime" onChange={handleChange} />
                <span>9:00</span>
              </label>


              {/* {children} */}
            </StyledRadio>
            
      </StyledLabel>
      
      
  )
}

export default TimeRadio;