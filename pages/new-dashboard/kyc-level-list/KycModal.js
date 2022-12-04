import React, { useState, useEffect } from "react"
import classnames from "classnames"
import { Controller, useForm, useFieldArray } from "react-hook-form"
import { useSelector } from "react-redux"
import {
  FormGroup,
  Label,
  Button,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  C
} from "reactstrap"
// import { trans } from "@utils"
// import { ButtonSpinner } from "@/src/components"
import { _addKyc, _saveKYC, _getLanguages, getKycAtrributes } from "../../../redux/actions"
import AsyncSelect from "react-select/async"
import UploadImageDialog from "../../../components/UploadImage/UploadImageDialog"
function KycModal(props) {
  const languages = useSelector((state) => state?.user?.languages)
  const loading = useSelector((state) => state?.app?.loading)
  const { register, errors, handleSubmit, control } = useForm()
  const [isEditAction, setIsEditAction] = useState(props?.data?.id !== 0)
  const [open, setOpen] = useState(true)
  const [has_bot, sethas_bot] = useState(0)
  const [is_default, setis_default] = useState(0)

  const [atributesArray, setAtributesArray] = useState([])
  const [optionsArray, setOptionsArray] = useState([])

  let atrributeValue
  const [openshowUploadFileDialog, setopenUploadFileDialog] = useState(false)
  useEffect(() => {
    console.log(props?.data, "props")
    setAtributesArray(props?.data?.attributes)
    getKycAtrributes(props?.data?.id, (d) => {
      console.log(d, "attributes")
    })
  }, [])
  const handleArrayOptions = (one) => {
    if (optionsArray?.length === 0) {
      one?.automated_attribute_values.map((option) => {
        optionsArray.push({ label: option.string_value, value: option.id })
      })
    }
  }

  const _close = () => {
    setOpen(false)
    props.onClose()
  }
  const handleAdd = (filepath) => {
    console.log(filepath)
    setopenUploadFileDialog(false)
    setIcon(filepath)
  }
  const handleCloseUploadFileDialog = () => {
    setopenUploadFileDialog(false)
  }
  const handleOpenUploadFileDialog = () => {
    setopenUploadFileDialog(true)
  }
  const handleFinishUpLoadFileSuccessfullyDialog = (filepath) => {
    //  console.log(error)(filepath)
  }
  const [icon, setIcon] = useState(null)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "kyc_level_translations"
  })
  useEffect(() => {
    if (props?.data?.photo_path) {
      setIcon(props?.data?.photo_path)
    }
    if (props?.data?.kyc_level_translations?.length > 0) {
      props?.data?.kyc_level_translations?.map((trans) => append(trans))
    }
  }, [])
  const [valErrors, setValErrors] = useState({})
  const onSubmit = (data) => {
    console.log("atrributeValue", atrributeValue)
    atrributeValue === "input" || atrributeValue === "file"
      ? (data = {
          string_value: data.phone,
          int_value: 1,
          attribute_id: 2,
          attribute_value_type_id: 2,
          role_id: 1
        })
      : atrributeValue === "select"
      ? (data = {
          automated_attribute_value_id: data?.prefered?.value,
          int_value: 1,
          attribute_id: 2,
          attribute_value_type_id: 2,
          role_id: 1
        })
      : ""
    _saveKYC(
      data,
      () => {
        _close()
      },
      (err) => {
        if (err) {
          const arr = {}
          for (const f in err) {
            if (err[f] !== null) arr[f] = err[f][0]
          }
          setValErrors(arr)
        }
      }
    )
  }
  return (
    <Modal
      isOpen={open}
      toggle={_close}
      unmountOnClose={true}
      backdrop={true}
      className="sidebar-lg"
      style={{
        width: "502px"
      }}
      contentClassName="p-0"
      modalClassName="modal-slide-in sidebar-todo-modal"
    >
      <Form action="/" className="flex-grow-1 d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader toggle={_close} className="mb-1">
          {"KYC Modal For : "} {props?.data?.kyc_level_translation?.name}
        </ModalHeader>
        <ModalBody className="flex-grow-1 pb-sm-0 pb-3 modal-body">
          {atributesArray.map((one) => {
            if (one?.attribute_type?.name === "input") {
              atrributeValue = one?.attribute_type?.name
              return (
                <FormGroup>
                  <Label
                    className="form-label"
                    for={`${one?.attribute_translations[0]?.name}`.substring(0, 5)}
                  >
                    {one?.attribute_translations[0]?.name}
                  </Label>
                  <Controller
                    as={Input}
                    name={`${one?.attribute_translations[0]?.name}`.substring(0, 5)}
                    id={`${one?.attribute_translations[0]?.name}`.substring(0, 5)}
                    control={control}
                    type={one?.attribute_translations[0]?.name === "phone number" ? "number" : "text"}
                    //  defaultValue={_.get(props, `data.sequence`) ?? ""}
                  />
                </FormGroup>
              )
            }
            if (one?.attribute_type?.name === "select") {
              handleArrayOptions(one), (atrributeValue = one?.attribute_type?.name)
              return (
                <FormGroup>
                  <Label
                    className="form-label"
                    for={`${one?.attribute_translations[0]?.name}`.substring(0, 8)}
                  >
                    {one?.attribute_translations[0]?.name}
                  </Label>
                  <Controller
                    as={Select}
                    name={`${one?.attribute_translations[0]?.name}`.substring(0, 8)}
                    id={`${one?.attribute_translations[0]?.name}`.substring(0, 8)}
                    control={control}
                    options={optionsArray}
                    //  defaultValue={_.get(props, `data.sequence`) ?? ""}
                  />
                </FormGroup>
              )
            }

            if (one?.attribute_type?.name === "image") {
              atrributeValue = one?.attribute_type?.name
              return (
                <FormGroup>
                  <Label className="form-label" for="icon">
                    {one?.attribute_translations[0]?.name}
                  </Label>
                  <Controller
                    render={() => {
                      return (
                        <>
                          <UploadImageDialog
                            pathupload={""}
                            open={openshowUploadFileDialog}
                            handleClose={handleCloseUploadFileDialog}
                            handleFinishUpLoadSuccessfully={handleFinishUpLoadFileSuccessfullyDialog}
                            handleAdd={handleAdd}
                            dialogTitle={"upload Image"}
                            fileName={"file_name"}
                            folder={"channels"}
                          />
                          <div
                            className="box"
                            onClick={(event) => handleOpenUploadFileDialog(event)}
                            style={{
                              padding: "7px",
                              width: "100%",
                              textAlign: "center",
                              height: "60px",
                              color: "blue",
                              cursor: "pointer"
                            }}
                          >
                            click here to upload an image
                          </div>
                          <div>
                            {icon && (
                              <img
                                src={`${process.env.NEXT_PUBLIC_FILE_PATH}${icon}`}
                                width="100px"
                                height="100px"
                              />
                            )}
                          </div>
                        </>
                      )
                    }}
                    control={control}
                    id="icon"
                    name="icon"
                  />
                </FormGroup>
              )
            }
          })}
        </ModalBody>
        <ModalFooter className="justify-content-center">
          <Button type="submit" className="flex-grow-1" color="primary">
            {/* {loading ? <ButtonSpinner /> : null} */}
            <span>{"Submit"}</span>
          </Button>
          <Button type="button" className="flex-grow-1" color="secondary" onClick={_close}>
            <span>{"Cancel"}</span>
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default KycModal
