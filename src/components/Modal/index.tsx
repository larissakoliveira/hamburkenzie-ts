import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router";

const ModalComponent = () => {

  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout")
  }

  const { cart, subItemCart, total, removeAllFromCart, removeItem, addItemCart } =
    useCart();
  const { user } = useAuth();

 
 
  const totalItems = cart.reduce(function (acc, actual) {
    return acc + actual.quantity
  },0)

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button _hover={{ transform: "translateY(-6px)"}} onClick={onOpen}>
        <Box w='20px'>
        <FaShoppingCart size='23px'color="gray" />{" "}
        </Box>
        <Text fontWeight='bold' ml='5px'marginBottom='17px' color={theme.colors.green.primary50} fontSize="16px">{totalItems}</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={theme.colors.green.primary50}>
            Seu carrinho {user.name}
          </ModalHeader>
          <ModalCloseButton />
          {cart.length > 0 ? (
            <ModalBody>
              {cart.map((item) => (
                <Flex
                  justifyContent="flex-start"
                  marginBottom="10px"
                  key={item.id}
                >
                  <Box borderRadius="8px" w="80px" bg="gray.200">
                    <Image padding="7px" src={item.image} />
                  </Box>
                  <Flex>
                    <Box>
                      <Heading margin="0px 10px" fontSize="21px">{item.title}</Heading>
                      <Flex ml='25px'>
                        <Box w="25px" h="25px">
                          <AiOutlinePlusCircle
                            onClick={() => addItemCart(item)}
                            cursor="pointer"
                            size="0.2x"
                            color="green"
                          />
                        </Box>
                        <Text
                          padding="0 10px"
                          font-size="27px"
                          color="gray.600"
                        >
                          {item.quantity}
                        </Text>
                        <Box w="25px" h="25px">
                          <AiOutlineMinusCircle
                            onClick={() => subItemCart(item)}
                            cursor="pointer"
                            size="0.2x"
                            color="red"
                          />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                  <Box w="25px" h="25px">
                    <BiTrash
                      cursor="pointer"
                      size="0.2x"
                      color="gray"
                      onClick={() => removeItem(item.id)}
                    />
                  </Box>
                </Flex>
              ))}
            </ModalBody>
          ) : (
            <ModalBody>Carrinho <strong>VAZIO</strong> :(( <Text> Não fique com fome!</Text></ModalBody>
          )}
          <hr />
          <ModalFooter display="column">
            <Flex justifyContent="space-between">
              <Heading padding="10px" fontSize="21px">
                Total
              </Heading>
              <Heading padding="10px" fontSize="21px">
                R$ {total.toFixed(2)}
              </Heading>
            </Flex>
            <Button bg='#50AF60' w="100%" onClick={checkout}>
              Checkout
            </Button>
            <Button bg='#F35C5F' mt='10px' left='25%'w="50%" onClick={removeAllFromCart}>
              Remover todxs
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
