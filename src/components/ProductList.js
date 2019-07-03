import React, { Component } from 'react';
import { inject} from 'mobx-react';
import Product from './Product';
import { Flex } from 'rebass';

@inject('cartStore')
class ProductList extends Component {

  renderProducts() {
    return this.props.cartStore.products.map((item) => {
      return (
        <Product 
          key={item.id} 
          image={item.image} 
          name={item.name} 
          price={item.price} 
          onClick={this.props.cartStore.addToCart} 
        />
      )
    })
  }

  render() {
    return (
      <Flex flexWrap="wrap" p={[2,3]}>
        {this.renderProducts()}
      </Flex>
    );
  }
}

export default ProductList;