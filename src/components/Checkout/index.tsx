import { Box, Button, Heading, Flex, Text, Link } from "@chakra-ui/react"
import { useNavigate } from "react-router";
import StripeCheckout from 'react-stripe-checkout';
import { useCart } from "../../providers/Cart";
import axios from 'axios';
import { useToast } from "@chakra-ui/toast";

interface handleTokenProps {
    token: string;
  }

const Checkout = () => {

    const toast = useToast()

    const { total } = useCart();

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/home")
    }

     const handleToken = async ({token}:handleTokenProps) => {
        const response = await axios.post('https://lv0cd.sse.codesandbox.io/checkout', {
            token
        });
        const { status } = response.data
        console.log(response.data)
        console.log(status)
        if (status === 'success') {
            toast({
                position: "top-right",
                description: "Compra efetuada! Enviamos um email com todas informações!",
                status: "success",
                duration: 4000,
                isClosable: true
              });
        } else {
            toast({
                position: "top-right",
                description: "Compra efetuada! Enviamos um email com todas informações!",
                status: "success",
                duration: 4000,
                isClosable: true,
                });
        }
    }

    return (
        <>
            <Button margin='0 auto'bg='#50AF60' color='#fff' onClick={goBack}>Volte a Hamburkenzie</Button>
            <Heading textAlign='center'>
                Checkout
            </Heading>
            <Box margin='30px 0' textAlign='center' fontWeight='bold' fontSize='1.8rem'>Métodos de pagamento</Box>
<Flex
    justifyContent='center'
><Text mr='30px'>
    Pague com cartão de crédito ou débito -&#62; 
    </Text>

            <StripeCheckout
            stripeKey='pk_test_51KAJfzHiM8NvJQ7K3VfCt1fmxHFd8QuvV938DQcITum6UO4ANpO4BTjWsdIfZed0jvE9fPNFyH6DFi9lyqNmz3SV004eraSwlH'
            token={()=>handleToken}
            billingAddress
            shippingAddress
            amount={total * 100}
            />
            </Flex>
            <Text mt='20px'textAlign='center'>OU</Text>
            <Text mt='20px'textAlign='center'>Envie um Pix para -&#62; <Link>hamburkenzie@gmail.com</Link></Text>
        </>
    )
}

export default Checkout