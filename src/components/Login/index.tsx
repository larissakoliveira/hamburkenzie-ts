import {
  Flex,
  Grid,
  Heading,
  Image,
  Box,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../providers/Auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logo from "../../assets/imgs/logo.png";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiShoppingBag } from 'react-icons/fi';
import { Navigate } from "react-router";



interface FormProps {
  handleForm: (userData: LoginData) => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
}

interface LoginData {
  email: string;
  password: string;
}


const Login = () => {
  const navigate = useNavigate();
  const { login, authToken } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().required("Informe email!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres.")
      .required("Informe senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (userData: LoginData) => {
    login(userData);
  };

  if(!!authToken){
    return <Navigate to='/home'/>
  }

  return (
    <>
      <Flex
        padding={["10px 15px", "10 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        height={["auto", "auto", "100vh", "100vh"]}
        color="white"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Grid
          as="form"
          onSubmit={handleSubmit(handleForm)}
          id="login_Form"
          padding="20px 15px"
          mt={["4", "4", "0"]}
          w={["100%", "100%", "50%", "50%"]}
          marginLeft="100px"
        >
          <Heading size="md" color="gray.600">
            Login
          </Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%">
              <Input
                label="Email"
                placeholder="Digite seu email"
                type="email"
                error={errors.email}
                icon={FaEnvelope}
                {...register("email")}
                data-testid="userNameTestId"
              />
              <Input 
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                error={errors.password}
                icon={FaLock}
                {...register("password")}
                data-testid="passwordTestId"
              />
     
            </Box>
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              bg="#219653"
              w={["200px", "100%"]}
              color="#FFFFFF"
              h="50px"
              borderRadius="10px"
              _hover={{
                bgColor: "green.primary50",
              }}
              type="submit"
              form="login_Form"
            >
              Logar
            </Button>
            <Text w="70%" textAlign="center" color="gray.400">
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </Text>
            <Button
              bg="gray.100"
              w={["200px", "100%"]}
              color="gray.600"
              h="50px"
              borderRadius="8px"
              onClick={() => navigate("/register")}
              _hover={{
                background: "gray.200",
              }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContent="center"
          flexDirection={["column", "column", "column", "column"]}
          alignItems="flex-start"
          marginLeft="100px"
        >
          <Box w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
            <Image
              src={logo}
              alt="doit"
              w={["120px", "120px", "200px", "200px"]}
            />
          </Box>
          <Flex
            border= "1px solid #E0E0E0"
            w={["100%", "100%", "50%", "50%"]}
            boxShadow= "0px 4px 40px -20px #00000040"
            margin= "15px 0px"
            borderRadius= "5px"
            alignItems= "center"
            padding='5px'
          >
            <Box marginLeft='10px' borderRadius= "5px" backgroundColor= "#27AE601A" w='100px' h='50px'>
            <FiShoppingBag size='1x' color='green' />
            </Box>
              <Text
                fontWeight="light"
                color="gray.300"
                fontSize="sm"
                maxW="350px"
                padding="10px"
              >
                A vida é como um sanduíche, é preciso recheá-la com os{" "}
                <strong>melhores</strong> ingredientes.
              </Text>
          
          </Flex>
          <Grid templateColumns="repeat(6, 3fr)" gap={6} mt="5" w="20%">
            {Array.from({ length: 18 }).map((_, i) => (
              <Box
                borderRadius="10px"
                bg="gray.100"
                h="11px"
                w="11px"
                key={i}
              />
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
