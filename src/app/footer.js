import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Code built with ♥ by the&nbsp;
        <a href="github.com/hseirafi.com">
         Hoss
        </a>
      </footer>
    );
  }
}
