import {
  Box,
  VStack,
  Divider,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const detailItems = ["Details", "Order Details", "Delivery Addresses"];

function Sidebar({ onSelect }) {
  const [selected, setSelected] = useState("Details");

  const handleSelect = (ui) => {
    setSelected(ui);
    onSelect(ui);
  };

  return (
    <>
      <Box pos='relative'>
        <VStack gap='32px' align='start'>
          {detailItems.map((item) => (
            <Box
              borderBottom={selected === item ? "solid 1px black" : ""}
              pb='16px'
              w='90%'
              key={item}
            >
              <Button
                color={selected === item ? "black" : "white"}
                fontSize='24px'
                variant='unstyled'
                fontWeight='normal'
                onClick={() => handleSelect(item)}
              >
                {item}
              </Button>
            </Box>
          ))}
          <LogoutModal />
        </VStack>
        <Divider
          pos='absolute'
          right='0'
          top='0'
          orientation='vertical'
          borderColor='black'
        />
      </Box>
    </>
  );
}

export default Sidebar;
