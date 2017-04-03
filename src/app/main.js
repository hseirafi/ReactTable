/*eslint-disable*/
import React, { Component } from 'react'
import { Header } from './header'
import { Title } from './title'
import { Techs } from './techs/techs'
import { Footer } from './footer'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
function Event (name) {
  this.name = name
  this.callbacks = []
}
Event.prototype.registerCallback = function (callback) {
  this.callbacks.push(callback)
}
function Reactor () {
  this.events = {}
}
Reactor.prototype.registerEvent = function (eventName) {
  const event = new Event(eventName)
  this.events[eventName] = event
}
Reactor.prototype.dispatchEvent = function (eventName, eventArgs) {
  this.events[eventName].callbacks.forEach(callback => {
    callback(eventArgs)
  })
}
Reactor.prototype.addEventListener = function (eventName, callback) {
  this.events[eventName].registerCallback(callback)
}
window.reactor = new Reactor()
window.reactor.registerEvent('updatedTable')
let data = [
  {
    firstName:   'Tiffany ',
    lastName:    'Twisted',
    dateOfBirth: 1969,
    phoneNumber: '777 777 777',
    address:     'Hotel California',
    notes:       'has the Mercedes bends'
  }
]
const styles = {
  container: {
    display:       'flex',
    flexDirection: 'column',
    minHeight:     '100%'
  },
  main:      {
    flex:          1,
    display:       'flex',
    flexDirection: 'column'
  }
}
if (localStorage.getItem('data') === null) {
  const model = JSON.stringify(data)
  localStorage.setItem('data', model)
}
else {
  data = JSON.parse(localStorage.getItem('data'))
}

// listen to Event outside of render, do something  with localStorage or other
// api then setState by proxy, //consider streams to avoid state.

//function handle(e){
//  if(e) {
//    data.push(e);
//    localStorage.setItem('data', JSON.stringify(data));
//  }
//}
//window.reactor.addEventListener('updatedTable', handle,false)
//let originalSetItem = localStorage.setItem;

export class Main extends Component {
  constructor () {
    super()
    this.setState = this.setState.bind(this)
    this.state = {
      data,
      loading: false,
      pages:   1
    }
  }

  componentDidMount () {
    window.reactor.addEventListener('updatedTable', e => {
      if (e) {
        data.push(e)
        localStorage.setItem('data', JSON.stringify(data))
        console.log('data comming in', e)
        console.log('data', data)
        this.setState({
          data:    data,
          loading: false
        })

      }
    }, false)
  }

//componentUnMount for non custom events.

  render () {
// instead of componentDidMount can use localStorage Event as a DataBinding for
    //const self = this;
    //localStorage.setItem = function(){
    //  document.createEvent('Event').initEvent('itemInserted', true, true);
    //  originalSetItem.apply(this, arguments);
    //  self.setState({
    //      data:    data,
    //      loading: false
    //    })
    //}
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Title/>
          <ReactTable
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: e => {
                  console.log('A Td Element was clicked!')
                  console.log('it produced this event:', e)
                  console.log('It was in this column:', column)
                  console.log('It was in this row:', rowInfo)
                  console.log('It was in this table instance:', instance)
                }
              }
            }}
            loading={this.state.loading}
            data={this.state.data}
            pages={this.state.pages}
            sorting={[
              {
                id:  'lastName',
                asc: true
              }, {
                id:  'firstName',
                asc: true
              }
            ]}
            columns={[
              {
                header:   'First Name',
                accessor: 'firstName'
              }, {
                header:   'Last Name',
                id:       'lastName',
                accessor: d => d.lastName
              }, {
                header:   'Date of Birth',
                accessor: 'dateOfBirth'

              }, {
                header:   'Phone Number',
                accessor: 'phoneNumber'
              }, {
                header:   'Address',
                accessor: 'address'
              }, {
                header:   'Notes',
                accessor: 'notes'
              }
            ]}
            defaultPageSize={20}
            title={this.title}
            manual
            onChange={(state, instance) => {
              console.log(state)
              this.setState({loading: true})
              this.setState({data: data, loading: false})
            }
            }
          />
          {/*<Techs/>*/}
        </main>
        <Footer/>
      </div>
    )
  }
}
