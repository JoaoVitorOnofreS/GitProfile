import { Container, Url, Id, DataCreate } from "./styled";
import DateObject from "react-date-object";
const UserAccount = (props) => {
    return (
        <Container>
            <Url>{props.html_url}</Url>
            <Id> {props.id}</Id>
        </Container>
    );
};

export default UserAccount;
