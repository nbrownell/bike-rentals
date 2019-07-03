import React from 'react';
import { inject, observer} from 'mobx-react';
import CartItem from './CartItem';
import { Box, Heading, Text } from 'rebass';
import CurrencyFormat from 'react-currency-format';

@inject('cartStore')
@observer
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    var items = this.props.cartStore.fetchCart();
    this.setState({ items: items });
  }
  render() {
    return (
      <Box p={3} color="white" fontSize={1}>
        <Heading fontSize={4} mb={2}>
          Cart
        </Heading>
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th align="left">
                <Text pr={3} pb={1}>
                  Product Name
                </Text>
              </th>
              <th align="left">
                <Text pr={3} pb={1}>
                  Price
                </Text>
              </th>
              <th align="left">
                <Text pr={3} pb={1}>
                  Action
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.items.map((item, idx) => {
                return (<CartItem item={item} key={idx}/>)
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <th align="left">
                <Text pr={3} pb={1}>
                  Total Amount
                </Text>
              </th>
              <th align="left">
                <Text pr={3} pb={1}>
                  <CurrencyFormat displayType="text" value={this.props.cartStore.totalAmount} prefix="$" decimalScale={2} fixedDecimalScale={true} />
                </Text>
              </th>
            </tr>
          </tfoot>
        </table>
      </Box>
    );
  }
}
