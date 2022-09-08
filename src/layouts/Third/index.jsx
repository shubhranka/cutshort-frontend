import Container from "../../containers/Container";
import Form from "../../containers/Form";
import Heading from "../../containers/Heading";
import HeadingContainer from "../../containers/HeadingContainer";
import ProgressBar from "../../containers/ProgressBar";
import SubHeading from "../../containers/SubHeading";
import {HiUser} from "react-icons/hi";
import {HiUserGroup} from "react-icons/hi";
import Card from "../../containers/Card";
import CardContainer from "../../containers/CardContainer";
const Third = () => {
    return (
        <Container>
            <ProgressBar progress={80}/>
            <HeadingContainer>
            <Heading>
                How are you planning to use Eden?
            </Heading>
            <SubHeading>
                We'll streamline your setup experience accordingly.
            </SubHeading>
            </HeadingContainer>
            <CardContainer>
                <Card icon={<HiUser/>} heading={"For Myself"} content={"Write better. Think more clearly. Stay organized."} />
                <Card icon={<HiUserGroup/>} heading={"With my team"} content={"Wikis, docs, tasks & projects, all in one place."} />
            </CardContainer>
            <Form buttonText={""} linkto={"/fourth"}/>
        </Container> 
    );
}

export default Third;