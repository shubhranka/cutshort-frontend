import Container from "../../containers/Container";
import Form from "../../containers/Form";
import Heading from "../../containers/Heading";
import HeadingContainer from "../../containers/HeadingContainer";
import Input from "../../components/Input";
import ProgressBar from "../../containers/ProgressBar";
import SubHeading from "../../containers/SubHeading";

const First = () => {
  return (
    <Container>
      <ProgressBar progress={20}/>
      <HeadingContainer>
        <Heading>
          Welcome! First things first...
        </Heading>
        <SubHeading>
          You can always change them later.
        </SubHeading>
      </HeadingContainer>
      <Form linkto={"/second"}>
        <Input label={"Full Name"} placeholder={"Steve Jobs"}/>
        <Input label={"Display Name"} placeholder={"Steve"}/>
      </Form>
    </Container>
  );
};

export default First;