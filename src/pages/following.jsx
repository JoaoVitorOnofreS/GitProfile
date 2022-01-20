import { useContext } from "react";
import { Container } from "../components/container/styles";
import { context } from "../context";
import FollowingContainer from "../components/followingContainer";

const Following = (props) => {
    const ctx = useContext(context);
    return (
        <Container>
            <FollowingContainer
                followings={ctx.userFollowings}
            ></FollowingContainer>
        </Container>
    );
};

export default Following;
