import React from "react";
import { TiArrowBack } from "react-icons/ti";
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  SignInContainer,
  Text,
} from "./SignInElements";

// import image from "../../images/bank.png";

const SignIn = () => {
  return (
    <SignInContainer>
      <FormWrap>
        <Icon to="/">
          {/* <img src={image} alt="logo" /> */}
          <TiArrowBack />
        </Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign-up</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  );
};

export default SignIn;
