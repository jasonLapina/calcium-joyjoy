import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function CheckoutPay({ onBack, onPay }) {
  const [payment, setPayment] = useState("1");
  return (
    <Box>
      <Box borderRadius='10px' py='8px' px='16px' border='solid 1px #d1d1d1'>
        <InputGroup>
          <Input border='none' placeholder='Contact' />
          <InputRightElement pr='40px'>
            <Button textDecor='underline' variant='unstyled'>
              Change
            </Button>
          </InputRightElement>
        </InputGroup>
        <Divider />
        <InputGroup>
          <Input border='none' placeholder='Ship to' />
          <InputRightElement pr='40px'>
            <Button textDecor='underline' variant='unstyled'>
              Change
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Text fontSize='24px' fontWeight='semibold' mb='24px' mt='48px'>
        Payment Method
      </Text>
      <RadioGroup
        borderRadius='10px'
        p='16px 32px'
        border='solid 1px #d1d1d1'
        value={payment}
        onChange={setPayment}
      >
        <VStack align='normal'>
          <Radio value='1'>Gcash</Radio>
          <Divider />
          <Radio value='2'>Bank Transfer</Radio>
          {payment === "2" && (
            <>
              <InputGroup>
                <InputLeftAddon
                  bgColor='white'
                  border='none'
                  p='0'
                  children='Bank name:'
                  opacity={0.6}
                />
                <Input pl='8px' variant='unstyled' />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon
                  bgColor='white'
                  border='none'
                  p='0'
                  children='Bank number:'
                  opacity={0.6}
                />
                <Input pl='8px' type='number' variant='unstyled' />
              </InputGroup>
            </>
          )}
        </VStack>
      </RadioGroup>

      <Grid mt='24px' gap='40px' gridTemplateColumns='1fr 1fr'>
        <Button borderRadius='20px' p='16px 40px' onClick={onBack}>
          Back
        </Button>
        <Button borderRadius='20px' p='16px 40px' onClick={onPay}>
          Continue
        </Button>
      </Grid>
    </Box>
  );
}

export default CheckoutPay;
