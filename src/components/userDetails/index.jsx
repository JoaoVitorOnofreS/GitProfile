import { Container, Name, Username, Description, DataCreate } from "./styles";

const UserDetails = (props) => (
    <Container>
        <Name>{props.name}</Name>
        <Username>
            {props.login} ID:{props.id}
        </Username>

        <Description>{props?.bio}</Description>
        <DataCreate>Create Date :{props?.created_at}</DataCreate>
    </Container>
);

export default UserDetails;
