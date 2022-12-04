import Register from "./register/register"
import { withRouter } from "next/router"
import { useRouter } from "next/router"
import BusinessInformation from "./register/businessInformation"
import PhoneNumber from "./register-new/phoneNumber"
import React, { useState, useEffect } from "react"
import Index1 from "./register/index"
import FinalSupplier from "./register-new/final-supplier"
import Index2 from "./verify/index"
// import { useTranslation } from "react-i18next"
import LanguageSwitchLink from "../../components/LanguageSwitchLink"

const Index = (props) => {
  const router = useRouter()
  const [page, setPage] = useState(parseInt(props?.router?.query?.page) === 5 ? 5 : 1)
  const [pass, setPass] = useState(null)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState("")
  const [id_token, setToken] = useState("")

  /*************************** */

  const [username, setUserName] = useState(null)
  const [company, setCompany] = useState(null)
  const [preffered_currency_id, setCurrency] = useState(null)
  const [keywords, setKeywords] = useState(null)
  const [city, setCity] = useState(null)
  const [citiesArray, setCitiesArray] = useState(null)
  const [countriesArray, setCountriesArray] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [mobile, setmobile] = useState(null)
  const [sessionInfo, setSessionInfo] = useState(null)

  /********************************** */
  useEffect(() => {
    //     // console.log(props.router.query, "props.router.query")
  })
  switch (page) {
    case 1:
      return (
        <Index1
          setRole={(role) => setRole(role)}
          switchToPass={() => {
            setPage(2)
          }}
        />
      )
    case 2:
      return (
        <Register
          setUserName={(username) => setUserName(username)}
          setSessionInfo={(sessionInfo) => setSessionInfo(sessionInfo)}
          setEmail={(email) => setEmail(email)}
          setPassword={(password) => setPassword(password)}
          setmobile={(mobile) => setmobile(mobile)}
          username={username}
          email={email}
          password={password}
          mobile={mobile}
          page={page}
          switchToNext={() => {
            setPage(3)
          }}
        />
      )
    case 3:
      return (
        <BusinessInformation
          role={role}
          setToken={(token) => setToken(token)}
          username={username}
          email={email}
          password={password}
          mobile={mobile}
          company={company}
          city={city}
          countriesArray={countriesArray}
          citiesArray={citiesArray}
          preffered_currency_id={preffered_currency_id}
          keywords={keywords}
          selectedValue={selectedValue}
          switchToNext={() => {
            setPage(5)
          }}
          switchToPrev={(data) => {
            // console.log(data, "data")
            setCompany(data?.data?.company)
            setCity(data?.data?.city_id[0])
            setCurrency(data?.data?.preffered_currency_id)
            setKeywords(data?.data?.keywords)
            setSelectedValue(data?.data?.selectedValue)
            setCitiesArray(data?.data?.citiesArray)
            setCountriesArray(data?.data?.countriesArray)
            setPage(2)
          }}
        />
      )
    case 4:
      return (
        <FinalSupplier
          role={role}
          id_token={id_token}
          username={username}
          email={email}
          password={password}
          switchToNext={() =>
            router.push({
              pathname: "/"
              //     query: {
              //       page: true
              //       //  username: username
              //     }
            })
          }
        />
      )
    case 5:
      return (
        <PhoneNumber
          role={role}
          sessionInfo={sessionInfo}
          id_token={id_token}
          username={username}
          page={page}
          password={password}
          switchToNext={() => {
            setPage(4)
            //   router.push({
            //     pathname: "/new-dashboard",
            //     query: {
            //       //  email: email,
            //       //  username: username
            //     }
            //   })
          }}
        />
      )
    case 6:
      return (
        <Index2
          role={role}
          id_token={id_token}
          username={username}
          password={password}
          switchToNext={() => {
            setPage(5)
          }}
        />
      )
  }
}

export default withRouter(Index)
