// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    result: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchDetails()
  }

  fetchDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    // const jwtToken = Cookies.get('jwt_token')
    // const options = {
    //  headers: {Authorization: `Bearer ${jwtToken}`},
    //  method: 'GET',
    // }
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const retrievedData = await response.json()
      // console.log(retrievedData)
      const updatedData = {
        lastSeven: retrievedData.last_7_days_vaccination.map(each => ({
          vaccineDate: each.vaccine_date,
          dose1: each.dose_1,
          dose2: each.dose_2,
        })),
        vaccinationByAge: retrievedData.vaccination_by_age.map(each => ({
          age: each.age,
          count: each.count,
        })),
        vaccinationByGender: retrievedData.vaccination_by_age.map(each => ({
          count: each.count,
          gender: each.gender,
        })),
      }
      this.setState({
        result: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      // console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureContainer = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderSuccessContainer = () => {
    const {result} = this.state
    return (
      <>
        <VaccinationCoverage details={result.lastSeven} />
        <VaccinationByGender details={result.vaccinationByGender} />
        <VaccinationByAge details={result.vaccinationByAge} />
      </>
    )
  }

  mainContainer = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessContainer()
      case apiStatusConstants.failure:
        return this.renderFailureContainer()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <div className="success-container">
        <div className="logo-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="logo-content">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        {this.mainContainer()}
      </div>
    )
  }
}
export default CowinDashboard
