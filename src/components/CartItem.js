import React from 'react';
import { inject, observer} from 'mobx-react';
import { Button, Text } from 'rebass';
import CurrencyFormat from 'react-currency-format';

@inject('cartStore')
@observer
export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    this.props.cartStore.removeFromCart(e);    
  } 
  render() {
    let {item}= this.props;
    return (
      <tr>
        <td>
          <Text pr={3} pb={1}>
            {item.name} 
          </Text>
        </td>
        <td>
          <Text pr={3} pb={1}>
            <CurrencyFormat displayType="text" value={item.price} prefix="$" decimalScale={2} fixedDecimalScale={true} />
          </Text>
        </td>
        <td>
          <Button
            fontSize={0}
            px={2}
            py={1}
            mb={1}
            bg="hsl(0, 0%, 35%)"
            onClick = {() => this.handleClick(item)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  }
}
