import { Box, Flex, Button, Grid, Image, Text, Heading, VStack } from "@chakra-ui/react";
import { useCart } from "../../providers/Cart";
import { useProducts } from "../../providers/Products";
import { theme } from "../../styles/theme";

const Card = () => {

  const { products, filteredProducts } = useProducts();
  const { addToCart } = useCart();

  return (
    <Grid w='100%' templateColumns='repeat(auto-fill, minmax(230px, 1fr))' gap={10} padding='8' mt='65px'>
     
      {/* {  filteredProducts.length > 0 ?
       filteredProducts.map((item) => (
      <Box
      borderRadius="5px"
      border="1px solid"
      borderColor="gray.300"
      w="100%"
      h="100%"
      padding='40px'
      key={item.id}
      >
      <Image
      height="158px"
      widht="158px"
      src={item.image}
      alt={item.title}
      />
      <Text textAlign='center' fontWeight='bold'>{item.title}</Text>
      <Text margin='5px'>{item.category}</Text>
      <h3>Preço: <b>{item.price.toFixed(2)}</b></h3>
      <Button onClick={() => addToCart(filteredProducts as any)}>Adicionar</Button>
      </Box>))
      : */}
      {products.map((item, index) => (
        <Box
         _hover={{ borderColor: "gray.300" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow='xl' 
      padding="7"
      w={["80vw", "auto"]}

        >
          <Flex bg='gray.100'justifyContent="center" w='100%'>
        <Image
        height="150px"
        width="150px"
        src={item.image}
        alt={item.title}
        />
        </Flex>
        <VStack padding='15px'spacing='3' flexDirection="column" alignItems={["center","center",'flex-start']}>
        <Text textAlign='center' fontWeight='bold'>{item.title}</Text>
        <Text color='gray.400' margin='5px'>{item.category}</Text>
        <Heading fontSize='16px' color={theme.colors.green.primary50} textAlign='center' >Preço: <b>{item.price.toFixed(2)}</b></Heading>
        <Button position='static' padding='20px'color='white' bg='gray.300' onClick={() => addToCart(item as any)}>Adicionar</Button>
        </VStack>
        </Box>
        ))
       
      }
    </Grid>
  )};

export default Card;
