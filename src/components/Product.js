import React from 'react';
import { Box, Button, Heading, Image, Text } from 'rebass';
import CurrencyFormat from 'react-currency-format';

function Product(props) {
  return (
    <Box width={[ 1, 1/2, 1/3 ]} p={[2,3]}>
      <Box bg='hsl(0, 0%, 96%)' p={3}>
        <Image width={1} src={props.image} alt={props.name} />
        <Heading fontSize={3} mt={2} mb={1}>
          {props.name}
        </Heading>
        <Text fontSize={2} mb={3}>
          <CurrencyFormat displayType="text" value={props.price} prefix="$" decimalScale={2} fixedDecimalScale={true} />
        </Text>
        <div>
          <Button onClick={(e) => { props.onClick(props) }}> Add to Cart </Button>
        </div>
      </Box>
    </Box>
  );
}

export default Product;
