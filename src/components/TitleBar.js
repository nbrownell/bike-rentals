import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Box, Heading, Text } from 'rebass';

@inject('cartStore')
@observer
class TitleBar extends Component {
  render() {
    return (
      <Box bg="hsl(0, 0%, 10%)" px={4} py={3}>
        <Heading fontSize={5} color="hsl(0, 0%, 100%)">
          Bike Rentals
        </Heading>
        <Text color="hsl(0, 0%, 70%)">
          Total Number of Items in Cart: {this.props.cartStore.count}
        </Text>
      </Box>
    );
  }
}

export default TitleBar;
