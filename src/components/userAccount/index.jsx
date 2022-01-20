import { Container, Id } from "./styled";

const UserAccount = (props) => {
    return (
        <Container>
            <Id> {props.id}</Id>
        </Container>
    );
};

export default UserAccount;
