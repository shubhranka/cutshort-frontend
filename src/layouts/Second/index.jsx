import Container from "../../containers/Container";
import Form from "../../containers/Form";
import Heading from "../../containers/Heading";
import HeadingContainer from "../../containers/HeadingContainer";
import Input from "../../components/Input";
import ProgressBar from "../../containers/ProgressBar";
import SubHeading from "../../containers/SubHeading";
import PrependedInput from "../../components/PrependedInput";

const Second = () => {
    return (
        <Container>
            <ProgressBar progress={50}/>
            <HeadingContainer>
            <Heading>
                Let's set up a home for all your work
            </Heading>
            <SubHeading>
                You can always create another workspace later.
            </SubHeading>
            </HeadingContainer>
            <Form linkto={"/third"}>
                <Input label={"Workspace Name"} placeholder={"Eden"}/>
                <PrependedInput label={"Workspace URL"} url={"www.eden.com/"}/>
            </Form>
        </Container>
    );
}

export default Second;