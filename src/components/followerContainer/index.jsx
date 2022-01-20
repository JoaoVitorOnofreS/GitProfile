import { FollowerPicture } from "../followerPic/style";
import { ProfilePicture } from "../userPic/styles";
import { Section, Title, ListOfFollowers, Follower } from "./styles";

const FollowersContainer = (props) => {
    return (
        <Section>
            <Title>Followers </Title>

            <ListOfFollowers>
                {(props?.followers).map((follower) => (
                    <Follower>
                        <h2>{follower?.login}</h2>
                        <img src={follower?.avatar_url}></img>
                    </Follower>
                ))}
            </ListOfFollowers>
        </Section>
    );
};

export default FollowersContainer;
