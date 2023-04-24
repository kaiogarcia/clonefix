import { Container, Logo, Back, Input, ContainerInput, 
         Button, Text, ContainerTexts, Form} from "./styles";
import React, { useEffect } from 'react'
import logo from '../../../assets/logo.png';
import login from '../../../assets/background.jpg'

const Login = ({navigation}) => {

  const handleLogin = () =>{
    navigation.replace("Home");
  };

  const handleForget = () =>{
    alert('senha');
  };

  const handleCreate = () =>{
    alert('conta');
  };

  return (
    <Back source={login}>
    <Container>
        <Logo source={logo}/>
        <Form>
          <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor="white" />
          </ContainerInput>
          <ContainerInput>
            <Input placeholder="Password" placeholderTextColor="white" />
          </ContainerInput>
          <Button onPress={handleLogin}>
            <Text>LOGIN</Text>
          </Button>
          <ContainerTexts>
            <Text onPress={handleForget}>Forget Password?</Text>
            <Text>|</Text>
            <Text onPress={handleCreate}>Create Account</Text>
          </ContainerTexts>
          </Form>
    </Container>
    </Back>
  )
}

export default Login