import {Container, TitleBox, PostTitle, More} from "../../style_components/Store/Store-Post";
import PostBox from "./PostBox";
import plus from "../../images/plus.png";

const StorePost = () => {
    return (
        <Container>
            <TitleBox>
                <PostTitle>게시글</PostTitle>
                <More src={plus} alt="plusIcon"></More>
            </TitleBox>
            <PostBox/>
            <PostBox/>
            <PostBox/>
            <PostBox/>
        </Container>
    );
};
export default StorePost;