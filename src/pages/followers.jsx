import { useContext } from "react";
import { Container } from "../components/container/styles";
import FollowersContainer from "../components/followerContainer";
import { context } from "../context";

const Followers = (props) => {
    const ctx = useContext(context);
    console.log(ctx.userFollowers);
    return (
        <Container>
            <FollowersContainer
                followers={ctx.userFollowers}
            ></FollowersContainer>
        </Container>
    );
};

export default Followers;
