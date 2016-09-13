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

import ScreenView from 'components/ScreenView';
import Button from 'components/Button';
import messages from './messages';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    function testClicked() {
        alert("Click!");
    }

    return (
      <div> 
        <ScreenView texts={doStuff()}/>
        <Button onClick={testClicked}>
          text
        </Button>
      </div>
    );
  }
}



function doStuff() {
  return {header: "Header Text", mininfo: "Info", intval: 0};
}
