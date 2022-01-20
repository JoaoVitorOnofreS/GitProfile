import { useHistory } from "react-router-dom";

import { Container, NumberContainer } from "./styles";

const UserNamber = (props) => {
    const history = useHistory();
    const handleOnClick = (Route) => history.push(Route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick("/repos")}>
                <h1>{props.repos}</h1>
                <h2>Repositories</h2>
            </NumberContainer>
            <NumberContainer onClick={() => handleOnClick("/followers")}>
                <h1>{props.followers}</h1>
                <h2>Followers</h2>
            </NumberContainer>
            <NumberContainer onClick={() => handleOnClick("/following")}>
                <h1>{props.following}</h1>
                <h2>Following</h2>
            </NumberContainer>
        </Container>
    );
};

export default UserNamber;
