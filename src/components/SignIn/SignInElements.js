import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-image: linear-gradient(90deg, #00b090 50%, #5acb35 50%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  font-size: 40px;

  @media screen and (max-width: 400px) {
    margin-left: 10px;
    margin-top: 30px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.div`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  @media screen and (max-width: 300px) {
    padding: 5px 5px;
    width: 100%;
  }
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(1, 151, 123, 1);
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
