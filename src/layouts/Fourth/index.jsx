import Container from "../../containers/Container";
import Form from "../../containers/Form";
import Heading from "../../containers/Heading";
import HeadingContainer from "../../containers/HeadingContainer";
import ProgressBar from "../../containers/ProgressBar";
import SubHeading from "../../containers/SubHeading";
import {HiOutlineCheck} from "react-icons/hi";
const Fourth = () => {
    return (
        <Container>
            <ProgressBar progress={100}/>
            <HeadingContainer>
            <Heading>
                Congratulations, Eren!
            </Heading>
            <SubHeading>
                You have completed onboarding, you can start using the Eden!
            </SubHeading>
            </HeadingContainer>
            <span style={{height:"5rem", width:"5rem", backgroundColor:"var(--button)", display:"flex", alignItems:"center",justifyContent:"center",borderRadius:"50%",marginTop:"3rem"}}>
                <HiOutlineCheck color="#fff" style={{color:"#fff"}} size={"2rem"}/></span>
            <Form buttonText={""} linkto={"#"}/>
        </Container> 
    );
}

export default Fourth;