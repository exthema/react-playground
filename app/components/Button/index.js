import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

function Button(props) {

    const className = props.className ? props.className : styles.button;

    let button = (
        <a className={className} href={props.href} onClick={props.onClick}>
            {Children.toArray(props.children)}
        </a>
    );

    return (
        <div className={styles.buttonWrapper}>
        {button}
        </div>
    );
}

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;

