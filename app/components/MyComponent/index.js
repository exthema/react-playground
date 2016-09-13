import React from 'react';
import styles from './styles.css';

function MyComponent(props) {
    return (
        <div className={styles.boxelement}>
        {props.prop1.a} {props.prop1.b}
        </div> 
    );
}

MyComponent.propTypes = {
  prop1: React.PropTypes.object
};

export default MyComponent;

