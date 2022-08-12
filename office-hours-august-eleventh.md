# Office Hours August Eleventh

## Delete Functionality for Apartment App


ApartmentShow.js
```javascript
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Card, CardImg, CardTitle, CardSubtitle, Button} from "reactstrap"

class ApartmentShow extends Component {

  render() {
    const {
      logged_in,
      current_user,
      apartment 
    } = this.props
    return (
      <>
        <h3>ApartmentShow</h3>
        {apartment &&
                <Card>
                  { current_user.id === apartment.user_id &&
                  <NavLink to={'/apartmentindex'} >
                    <Button onClick={() => this.props.deleteApartment(apartment.id)}>Delete Apartment</Button>
                  </NavLink>
                  }
                </Card>
        }
      </>
    )
  }
}

export default ApartmentShow
```


App.js

```javascript

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.readApartment()
  }

readApartment = () => {
  fetch ("/apartments")
  .then(response => response.json())
  .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
  .catch(errors => console.log ("Apartment read errors: ", errors))
}

deleteApartment = (apartmentId) => {
  fetch(`/apartments/${apartmentId}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(() => this.readApartment())
  .catch(errors => console.log ("Apartment delete errors:", errors))
}

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentindex" render={(props) => < ApartmentIndex apartments={this.state.apartments} />} />
            <Route path="/mylistings" render={(props) =>{
              let myListings = this.state.apartments.filter(apartment => apartment.user_id === current_user.id)
              return(
              <ProtectedApartmentIndex 
              apartments={myListings} 
              />
              )
              }} />
            <Route path="/apartmentshow/:id" render={(props) => {
              let id = +props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === id)
              return <ApartmentShow apartment={apartment} {...this.props} deleteApartment={this.deleteApartment}/>}} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
    )
  }
}

export default App
```