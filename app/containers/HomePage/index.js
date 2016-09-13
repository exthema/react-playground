/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import MyComponent from 'components/MyComponent';
import messages from './messages';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    let o = doStuff();

    return (
      <div> 
        <FormattedMessage {...messages.header} />
        <MyComponent prop1={o}/>
        <MyComponent prop1={doStuff()}/>
      </div>
    );
  }
}

function doStuff() {
  return {a: "data", b: "comp"};
}