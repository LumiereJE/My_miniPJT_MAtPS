import styled from "styled-components";

// export const TimeBox = styled.input`
//     width: 5rem;
//     height: 2rem;
//     text-align: center;
//     line-height: 30px;
//     border-radius: 30px;
//     border: 2px solid #d94d4d;
//     background-color: #fff;
//     color: #d94d4d;
//     font-weight: 900;
//     font-size: 1.5rem;
// `;
export const StyledLabel = styled.div`
    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
    }

    > span {
        min-width: fit-content;
        padding: 0;
        font-weight: 900;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: #d94d4d;
    }
`

export const StyledRadio = styled.div`  
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > label {
        width: 70px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        
        border-radius: 30px;
        border: 3px solid #d94d4d;
        box-sizing: border-box;
    }
    > label > input {
        /* display: none; */
        /* visibility : hidden */
    }
    > label span {
        font-size: 1.2rem;
        font-weight: 900;
        color: #d94d4d;
    }
    
    :hover {
        cursor: pointer;
    }

    :checked input { 
        color : #fff;
        background-color: #d94d4d;
        border: none;
        
        :disabled {
            background: center url("사용할 svg 이미지의 data url") no-repeat;
        }
    }

    :disabled {
        & + span {
            cursor: default;
        }

        :hover {
            cursor: default;
        }
    }

    :checked ~ span {
        /* color: #000000; */
    }


`



    