import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import RegisButton from './styles/RegisButton';

const Cart = () => (
    <CartStyles open>
        <header>
            <CloseButton title="close">
                &times;
            </CloseButton>
            <Supreme>Your Cart</Supreme>
            <p>You Have __ Items in your cart.</p>
        </header>
  
        <footer>
            <p>$10.10</p>
            <RegisButton>Checkout</RegisButton>
        </footer>
    </CartStyles>
          
);

export default Cart;
