import React, { Component } from 'react';

import Button from 'components/Button';

import styles from './styles.css';

class ScreenView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props
        }

        //this.state.a=0;
    }

    buttonClickPlus() {
        this.state.a = ++this.state.a;
        this.setState(this.state);
    } 

    buttonClickMinus() {
        this.state.a = --this.state.a;
        this.setState(this.state);
    } 

    render() {
        return (
        
            <div className={styles.divider}>
                <div className={styles.dividerdate}>asd</div>
                <div className={styles.dividertext}>asds</div>

                <div className={styles.dividertldr}>
                    <div className={styles.tldrtextp}>
                        Text to show here ... {this.state.a}
                        <Button onClick={ ::this.buttonClickPlus}>Plus</Button>
                        <Button onClick={ ::this.buttonClickMinus}>Minus</Button>
                    </div> 
                </div>
                <div className={styles.dividercontainer}>
                    <div className={styles.dividercontainertextp}>
                        Lorem ipsum asdfert e roer gokkoegr okrg eorkog eokrgo eork gokerokgk oerok goke okoks ok ekg.
                    </div>
                    <div className={styles.dividercontainertextp}>
                        Lorem  asdfa sdf asdf asdf asdf asdf asdf asdf asdfa sdf asdf asdf asdff dsf sdsf dfdsdf s ipsum asdfert e roer gokkoegr okrg eorkog eokrgo eork gokerokgk oerok goke okoks ok ekg.
                    </div>   
                    <div className={styles.dividercontainertextp}>
                        Lorem ipsum asdfert e roer gokkoegr okrg eorkog eokrgo eork gokerokgk oerok goke okoks ok ekg.
                    </div>         
                </div>
                <div className={styles.dividerlineend}></div>
            </div>
        );
    }
}

ScreenView.propTypes = {
  a: React.PropTypes.string
};

export default ScreenView;

