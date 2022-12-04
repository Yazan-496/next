import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { Center } from "native-base"
import PinInput from "react-pin-input"
const PinInputs = ({ setCodePanel, setPin, pin, counter, setcounter }) => {
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => {
        setcounter(counter - 1)
      }, 1000)
    }
  }, [counter])

  return (
    <>
      <div className={`action_button5 ${pin?.length === 6 ? "greenBack" : "err_bac"}`}>
        <div className={"p2sec3"}>
          {/* <div className={"cancel_button"} onClick={() => setCodePanel(false)}>
            Cancel
          </div> */}
          <div className={"code_area"}>
            {/* <Center> */}
            <PinInput
              length={6}
              initialValue=""
              onChange={(value, index) => setPin(value)}
              type="numeric"
              inputMode="number"
              style={{ marginTop: "20px", marginBottom: "20px" }}
              inputStyle={{
                borderRadius: 10,
                borderColor: "#b7b7b7",
                width: 40,
                height: 47
              }}
              inputFocusStyle={{ borderColor: "blue" }}
              // onComplete={(value, index) => setPin(value)}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              // disabled={disablePin}
            />
            {/* </Center> */}
          </div>
          {/* <div className={"counter_area"}>{counter}s</div> */}
        </div>
        <div className={"input-hint"}>
          Please Enter The Code Sent To Your Phone, In Case You Encounter A Problem, Request A New Code
        </div>
      </div>
      {/*{checkCode() === 1 && <div className="att"> You Have 3 Attempts </div>}*/}
    </>
  )
}

export default PinInputs
