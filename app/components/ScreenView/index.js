import React from 'react';

import Button from 'components/Button';

import styles from './styles.css';

function ScreenView(props) {

    function testClick() {
        alert("Clicky!");
    }

    return (
        
        <div className={styles.divider}>
            <div className={styles.dividerdate}>{props.texts.mininfo}</div>
            <div className={styles.dividertext}>{props.texts.header}</div>

            <div className={styles.dividertldr}>
                <div className={styles.tldrtextp}>
                    Text to show here ...
                    <Button onClick={testClick} >TestButton</Button>
                    <Button onClick={testClick} >TestButton</Button>
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

ScreenView.propTypes = {
  texts: React.PropTypes.object,
  intval: React.PropTypes.string
};

export default ScreenView;

