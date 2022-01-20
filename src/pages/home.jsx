import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPic";
import UserDetails from "../components/userDetails";
import UserNamber from "../components/UserNumbers";
import react, { useContext } from "react";

import { context } from "../context";
import React from "react";
import UserAccount from "../components/userAccount";
import Date from "../components/userAccount";

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ? (
                    <React.Fragment>
                        <UserPicture
                            url={ctx.userData?.avatar_url}
                            alternativeText={ctx.userData?.login}
                        />
                        <UserDetails
                            name={ctx.userData?.name}
                            login={ctx.userData?.login}
                            bio={ctx.userData?.bio}
                            id={ctx.userData?.id}
                            created_at={ctx.userData?.created_at}
                        ></UserDetails>
                        <UserAccount></UserAccount>

                        <UserNamber
                            repos={ctx.userData?.public_repos}
                            followers={ctx.userData?.followers}
                            following={ctx.userData?.following}
                        ></UserNamber>
                    </React.Fragment>
                ) : undefined}
            </UserContainer>
        </Container>
    );
}
