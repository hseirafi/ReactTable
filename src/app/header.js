/*eslint-disable*/
import React, {Component} from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E97A23',
    boxShadow :'0 20px 15px #888888'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Contacts Keeper
          </a>
        </p>
        <p style={styles.date}>

        </p>
      </header>
    );
  }
}

