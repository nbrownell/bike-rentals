import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import TitleBar from './TitleBar';
import ProductList from './ProductList';
import Cart from './Cart';
import { Box, Flex } from 'rebass';

@inject('cartStore')
@observer
class Home extends Component {
  render() {
    return (
      <div>
        <TitleBar/>
        <Flex flexWrap={['wrap', 'nowrap']}>  
          <Box width={[1,8/12,9/12]}>
            <ProductList/>
          </Box>
          <Box width={[1,4/12,3/12]} bg="hsl(0, 0%, 20%)">
            <Cart/>
          </Box>
        </Flex>
      </div>
    );
  }
}

export default Home;
