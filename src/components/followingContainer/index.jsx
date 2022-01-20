import { Section, Title, ListOfFollowing, Following } from "./styles";

const FollowingContainer = (props) => {
    return (
        <Section>
            <Title>Following</Title>
            <ListOfFollowing>
                {(props?.followings).map((following) => (
                    <Following>
                        <h2>{following?.login}</h2>
                        <img src={following?.avatar_url} alt=""></img>
                    </Following>
                ))}
            </ListOfFollowing>
        </Section>
    );
};

export default FollowingContainer;
