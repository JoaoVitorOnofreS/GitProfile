import Container from "../components/container";
import ReposContainer from "../components/reposContainer";
import { useContext } from "react";

import { context } from "../context";

const Repos = (props) => {
    const ctx = useContext(context);

    return (
        <Container>
            <ReposContainer name={ctx.userData?.name} repos={ctx.userRepos} />
        </Container>
    );
};

export default Repos;
