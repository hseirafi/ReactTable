/*eslint-disable*/
import React, { Component } from 'react'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')
ReactModal.defaultStyles.content.background = 'none'
ReactModal.defaultStyles.content.border = 'none'
const styles = {
  boxShadow:    {
    boxShadow: '10px 10px 5px #888888'
  },
  title:        {
    display:         'flex',
    flexDirection:   'column',
    alignItems:      'flex-start',
    padding:         '1rem',
    backgroundColor: 'none',
    color:           'white'
  },
  inline:       {
    display:        'inline-flex',
    justifyContent: 'space-between'
  },
  searchAdd:    {
    display:        'flex',
    width:          '100%',
    justifyContent: 'space-between'
  },
  submitSearch: {
    borderRadius:    '1px',
    border:          '1px solid #cccccc',
    backgroundColor: '#216FB5',
    color:           'white',
    width:           '5rem'
  },
  searchField:  {
    display:      'flex',
    flex:         '1',
    maxHeight:    '45px',
    alignItems:   'flex-start',
    borderRadius: '4px',
    width:        '11rem',
    border:       '1px solid #cccccc'
  },
  date:         {
    margin:       '0 47px 0rem 0rem',
    cursor:       'pointer',
    color:        '#216FB5',
    border:       '1px solid rgb(174, 174, 174)',
    borderRadius: '30px',
    background:   'white',
    fontSize:     '13px',
    fontWeight:   '400',
    display:      'inline-block',
    lineHeight:   '0',
    padding:      '8px 5px'
  },
  trigger:      {
    display:         'flex',
    alignItems:      'flex-end',
    backgroundColor: '#216FB5',
    color:           'white',
    width:           '15rem',
    borderRadius:    '4px'
  },
  parent:       {
    display:         'flex',
    flexDirection:   'column',
    padding:         '1rem',
    backgroundColor: 'none',
    color:           '#676767'
  },
  top:          {
    maxHeight:       '300px',
    display:         'inline-flex',
    flexDirection:   'row',
    padding:         '1rem',
    justifyContent:  'space-between',
    backgroundColor: 'white',
    color:           '#676767'
  },
  modal:        {
    display:        'flex',
    flexDirection:  'column',
    padding:        '1rem',
    alignItems:     'center',
    justifyContent: 'center'

  },
  centerModal:  {
    maxWidth:        '950px',
    minWidth:        '950px',
    boxShadow:       '0 25px 25px #888888',
    borderRadius:    '3px',
    backgroundColor: 'white'
  },
  modalLeft:    {
    display:         'flex',
    flexDirection:   'column',
    alignItems:      'flex-start',
    padding:         '1rem',
    maxWidth:        '300px',
    backgroundColor: 'white',
    color:           '#676767'
  },

  modalRight:  {
    display:         'flex',
    flexDirection:   'column',
    alignItems:      'flex-end',
    padding:         '1rem',
    backgroundColor: 'white',
    color:           '#676767'
  },
  input:       {
    marginTop:    '5px',
    width:        '300px',
    height:       '28px',
    borderRadius: '4px',
    border:       '2px solid #cccccc'
  },
  label:       {
    //display:'flex',
    marginTop:   '20px',
    marginRight: 'auto',
    fontWeight:  '500'

  },
  labelText:   {
    //display:'flex',
    marginBottom: '19px',
    marginRight:  'auto',
    fontWeight:   '500'

  },
  h1:          {
    fontWeight: 300,
    fontSize:   '4rem',
    margin:     '1rem'
  },
  logo:        {
    height:          '12rem',
    backgroundColor: 'white',
    borderRadius:    '1rem',
    margin:          '1rem'
  },
  modalFooter: {
    display:         'flex',
    flexDirection:   'column',
    alignItems:      'flex-start',
    padding:         '1rem',
    width:           '91%',
    marginLeft:      '1rem',
    backgroundColor: 'white',
    color:           '#676767'
  },
  textArea:    {
    width:   '100%',
    padding: '1rem',

    borderRadius: '4px'
  },
  save:        {
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'flex-end',
    marginLeft:    '1rem',
    padding:       '1rem'

  },
  hr:          {
    width: '100%'

  },
  button:      {

    height:          '2rem',
    width:           '5rem',
    borderRadius:    '4px',
    backgroundColor: '#676767',
    color:           '#FFFFFF'

  }

}
const headerStyles = {
  header:   {
    display:         'flex',
    alignItems:      'center',
    backgroundColor: '#216FB5'
  },
  title:    {
    flex:     1,
    fontSize: '1.5rem',
    margin:   '1rem'
  },
  date:     {
    margin:       '6px 27px 0rem 0rem',
    cursor:       'pointer',
    color:        'red',
    border:       '1px solid rgb(174, 174, 174)',
    borderRadius: '30px',
    background:   'white',
    fontSize:     '13px',
    fontWeight:   '400',
    display:      'inline-block',
    lineHeight:   '0px',
    padding:      '13px 11px'

  },
  boxClose: {},
  before:   {
    content: 'x'
  }

}
const title = 'title'
export class Title extends Component {
  constructor () {
    super()

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.state = {
      title,
      showModal: false
    }
    console.log('this is this ', this)
  }

  handleOpenModal () {
    this.setState({showModal: true})
  }

  handleCloseModal (e) {
    console.log('e',e)
    if (e) {


      const start = {
        firstName:   document.getElementById('firstName').value,
        lastName:    document.getElementById('lastName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address:     document.getElementById('address').value,
        notes:       document.getElementById('notes').value
      }
      window.reactor.dispatchEvent('updatedTable', start)
      console.log('this', this.props)
      // this.props.changeTable(start);
      this.setState({showModal: false})
    }
    this.setState({showModal: false})
  }

  render () {
    return (
      <div >
        <div style={styles.title}>
          <h1 style={styles.h1}>{this.title}</h1>
          <div style={styles.searchAdd}>
            <div style={styles.inline}>
              <input style={styles.searchField} type="search"/>
              <button style={styles.submitSearch} type="submit">Search</button>
            </div>
            <button style={styles.trigger} onClick={this.handleOpenModal}><a
              style={styles.date}>+</a>Contacts Keeper
            </button>
          </div>
          <div>
          </div>
          <h2 style={styles.h2}>Always a pleasure scaffolding your apps.</h2>
        </div>
        <ReactModal isOpen={this.state.showModal} style={styles.modal}
                    contentLabel="Minimal Modal">
          <div style={styles.modal}>
            <div style={styles.centerModal}>
              <header style={headerStyles.header}>
                <p style={headerStyles.title}>
                  <a
                    href="https://github.com/FountainJS/generator-fountain-webapp"
                    target="_blank" rel="noopener noreferrer">
                    Contact Keeper
                  </a>
                </p>
                <a onClick={this.handleCloseModal} style={headerStyles.date}>x
                </a>
              </header>
              <div style={styles.parent}>
                <div style={styles.top}>
                  <div style={styles.modalLeft}>
                    <lable style={styles.label} htmlFor="firstName">First Name
                    </lable>
                    <input style={styles.input} name="firstName" id="firstName"
                           type="text"/>
                    <lable style={styles.label} htmlFor="dateOfBirth">Date OF
                      Birth
                    </lable>
                    <input style={styles.input} name="dateOfBirth"
                           id="dateOfBirth" type="date"/>
                    <lable style={styles.label} htmlFor="address">Email
                    </lable>
                    <input style={styles.input} name="address" id="address"
                           type="email"/>
                  </div>
                  <div style={styles.modalRight}>
                    <lable style={styles.label} htmlFor="lastName">Last Name
                    </lable>
                    <input style={styles.input} name="lastName" id="lastName"
                           type="text"/>
                    <lable style={styles.label} htmlFor="phoneNumber">Phone
                      Number
                    </lable>
                    <input style={styles.input} name="phoneNumber"
                           id="phoneNumber" type="number"/>
                  </div>
                </div>
                <div style={styles.modalFooter}>
                  <lable style={styles.labelText} htmlFor="notes">Notes</lable>
                  <textarea style={styles.textArea} rows="4" cols="59"
                            name="notes" id="notes" type="text"
                            defaultValue=""/>
                </div>
                <hr style={styles.hr}/>
                <div style={styles.save}>
                  <button style={styles.button} id="submit"
                          onClick={this.handleCloseModal}>Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}
