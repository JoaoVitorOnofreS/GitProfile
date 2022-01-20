import { Container, FollowerPicture } from "./styles";

const FollowerPic = (props) => (
    <Container>
        <FollowerPicture src={props?.url} alt={props?.alternativeText} />
    </Container>
);

export default FollowerPic;
