import React, { useState, useEffect } from "react"
import classnames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  Controller,
  useForm,
  useFieldArray,
  useFormContext,
  FormProvider,
  useController
} from "react-hook-form"
import { useSelector } from "react-redux"
import { Editor } from "@tinymce/tinymce-react"
import { FormGroup, Label, Button, Form, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { _addKyc, _editKyc, _getLanguages, getKycAtrributes } from "../../../../redux/actions"
import AsyncSelect from "react-select/async"
import Select from "react-select"
import { useQuery, useMutation } from "@apollo/client"
import { GET_PRODUCTS, ADD_PRODUCT, GET_CATEGORIES } from "../../../../graphql/queries"
import UploadImageDialog from "../../../../components/UploadImage/UploadImageDialog"
export default function AddProductModal(props) {
  const router = useRouter()
  const [categories, setCategories] = useState(props?.categories)
  const [categoriesId, setCategoriesId] = useState(props?.categoriesId)
  const [categoriesNames, setCategoriesNames] = useState(props?.categoriesNames)

  const { register, errors, handleSubmit, control } = useForm()
  const optionsCondition = [
    { label: "Choose Condition", value: 1 },
    { label: "New", value: "new" },
    { label: "Used", value: "used" }
  ]
  const optionsYesNo = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" }
  ]
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, {
    onComplete: (data) => {
      console.log(data)
    }
  })
  const handleAdd = (data) => {
    console.log("🚀 ~ file: addProductModal.js:44 ~ handleAdd ~ data", data)
    // addProduct({ variables: { is_active: true, product_name: "firstTestCreateProduct", is_4_listing: true } })
  }
  const [valErrors, setValErrors] = useState({})
  const onSubmit = (data) => {
    handleAdd(data)
  }
  return (
    <Form
      action="/"
      className="breadcrumb-container flex-grow-1 d-flex flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      {console.log(categories, "categories")}
      <ModalHeader className="title">
        <p className="title">Basic Information</p>
      </ModalHeader>
      <div className="breadcrumb-container">
        <div className="banner">
          <span className="pull-left custom-label">Selected Category</span>
          <span className="pull-right">
            <Link href="/new-dashboard/my-store/add-product">
              <a onClick={() => props.handleMain(true)} id="changeCategory">
                Change category
              </a>
            </Link>
          </span>
        </div>
        <ol className="breadcrumb">
          {categoriesNames?.map((one) => {
            return ` ›   ${one}`
          })}
        </ol>
        <div className="category">
          <a onClick={() => props.handleMain(true)} id="icCategory">
            <span className="icon-category" />
          </a>
          {/* </Link> */}
        </div>
      </div>
      <ModalBody className="form-items flex-grow-1 pb-sm-0 pb-3 modal-body">
        <FormGroup className="form-group">
          <Label id="titleLabel" for={`titleLabel`}>
            Item Title
          </Label>
          <Controller
            placeholder="Title"
            className="form-control checkable"
            as={Input}
            name={`title`}
            id={`title`}
            control={control}
            type="text"
          />
          <Label id="ar_titleLabel" for={`ar_titleLabel`}>
            Arabic Item Title (Recommended)
          </Label>
          <Controller
            name="ar_title"
            id="ar_title"
            as={Input}
            placeholder="Arabic Title (Recommended)"
            className="form-control"
            control={control}
            type="text"
          />
        </FormGroup>
        <FormGroup className="upload-image uploading-box">
          <Label id="item-img" for={`item-img`}></Label>
          <input type="hidden" id="default_image" />
          <Controller as={Input} type="hidden" name="item-img" id="item-img" multiple control={control} />
          <div className="thumbnail-img">
            <a href="#" className="thumbnail">
              <span className="fa fa-plus-square" />
            </a>
          </div>
        </FormGroup>
        <FormGroup className="form-group">
          <Label id="youtube_videoLabel" for={`youtube_videoLabel`}>
            Video URL
          </Label>
          <Controller
            as={Input}
            type="text"
            name="youtube_video"
            id="youtube_video"
            className="form-control"
            control={control}
          />
        </FormGroup>
      </ModalBody>
      <ModalBody className="form-items flex-grow-1 pb-sm-0 pb-3 modal-body">
        <ModalHeader className="title">
          <p className="title">Item Specifications</p>
        </ModalHeader>
        <FormGroup className="form-group col-md-4">
          <Label id="Condition" for={`Condition`}>
            Condition
          </Label>
          <Controller
            as={Input}
            type="text"
            name="youtube_video"
            id="youtube_video"
            className="form-control"
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Brand" for={`Brand`}>
            Brand
          </Label>
          <Controller
            as={Input}
            type="text"
            id="attr[14]"
            data-ival={14}
            name="attr[14]"
            className="form-control"
            placeholder="Brand"
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Warranty" for={`Warranty`}>
            Warranty*
          </Label>
          <Controller
            as={Select}
            name="Warranty"
            id="Warranty"
            control={control}
            defaultValue="yes"
            options={optionsYesNo}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="MechanicalCondition*" for={`MechanicalCondition*`}>
            Mechanical Condition*
          </Label>
          <Controller
            as={Select}
            name="MechanicalCondition"
            id="MechanicalCondition"
            defaultValue="Choose Mechanical Condition"
            options={optionsYesNo}
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Color" for={`Color`}>
            Color*
          </Label>
          <Controller
            as={Select}
            defaultValue="Choose Mechanical Condition"
            options={optionsYesNo}
            name="Color"
            id="Color"
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="FuelType" for={`FuelType`}>
            Fuel Type*
          </Label>
          <Controller as={Select} options={optionsYesNo} name="FuelType" id="FuelType" control={control} />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="FuelTankCapacity" for={`FuelTankCapacity`}>
            Fuel Tank Capacity*
          </Label>
          <Controller
            as={Select}
            options={optionsYesNo}
            name="FuelTankCapacity"
            id="FuelTankCapacity"
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="TransmissionSystem" for={`TransmissionSystem`}>
            Transmission System
          </Label>
          <Controller
            as={Select}
            name="TransmissionSystem"
            id="TransmissionSystem"
            options={optionsYesNo}
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Certification" for={`Certification`}>
            Certification
          </Label>
          <Controller
            as={Select}
            options={optionsYesNo}
            name="Certification"
            id="Certification"
            control={control}
          />
        </FormGroup>
        <FormGroup style={{ marginTop: "300px" }} className="form-group">
          <Label id="Details" for={`CertificatioDetailsn`}>
            Details
          </Label>
          <Controller as={Editor} name="Details" className="" id="Details" control={control} />
        </FormGroup>
      </ModalBody>
      <ModalBody className="form-items flex-grow-1 pb-sm-0 pb-3 modal-body">
        <ModalHeader className="title">
          <p className="title">Prices & Offers</p>
        </ModalHeader>
        <FormGroup className="form-group col-md-4">
          <Label id="Currency" for={`Currency`}>
            Currency
          </Label>
          <Controller as={Input} type="text" name="Currency" id="Currency" control={control} />
        </FormGroup>
        <FormGroup className="input-group form-group col-md-4">
          <Label id="Price" for={`Price`}>
            Price
          </Label>
          <Controller
            as={Input}
            className="form-control"
            type="text"
            name="Price"
            id="Price"
            control={control}
          />
          <div className="input-group-btn">
            <div className="btn-group bootstrap-select">
              <button
                type="button"
                style={{ marginTop: "27px" }}
                className="btn dropdown-toggle btn-default btn-block"
                data-toggle="dropdown"
                title=" Unit"
              >
                <span className="filter-option pull-left unitper"> Unit</span>
                <span className="hidden" id="unitVal" />
                <span className="bs-caret">
                  <span className="fa fa-sort" />
                </span>
              </button>
            </div>
          </div>
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Order" for={`Order`}>
            Minimum Order*
          </Label>
          <Controller as={Input} type="text" name="Order" id="Order" control={control} />
        </FormGroup>
      </ModalBody>
      <ModalBody className="form-items flex-grow-1 pb-sm-0 pb-3 modal-body">
        <ModalHeader className="title">
          <p className="title">Shipping & Delivery</p>
        </ModalHeader>
        <FormGroup className="input-group form-group col-md-4">
          <Label id="Deliver" for={`Deliver`}>
            I Can Deliver
          </Label>
          <Controller
            as={Input}
            type="text"
            name="Deliver"
            className="form-control"
            id="Deliver"
            control={control}
          />

          <div className="input-group-btn">
            <div className="btn-group bootstrap-select">
              <button
                type="button"
                style={{ marginTop: "27px" }}
                className="btn dropdown-toggle btn-default btn-block"
                data-toggle="dropdown"
                title=" Unit"
              >
                <span className="filter-option pull-left unitper"> Unit</span>
                <span className="hidden" id="unitVal" />
                <span className="bs-caret">
                  <span className="fa fa-sort" />
                </span>
              </button>
            </div>
          </div>
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Manufacturing" for={`Manufacturing`}>
            Manufacturing Country*
          </Label>
          <Controller
            as={Select}
            options={optionsYesNo}
            name="Manufacturing"
            id="Manufacturing"
            control={control}
          />
        </FormGroup>
        <FormGroup className="form-group col-md-4">
          <Label id="Pckaging" for={`Pckaging`}>
            Pckaging Type
          </Label>
          <Controller as={Select} options={optionsYesNo} name="Pckaging" id="Pckaging" control={control} />
        </FormGroup>
      </ModalBody>
      <ModalFooter className="col-md-12">
        <Button type="submit" className="btn btn-primary btn-fill" color="primary">
          {/* {loading ? <ButtonSpinner /> : null} */}
          <span>{"Submit"}</span>
        </Button>
        {/* <Button type="button" className="flex-grow-1" color="secondary">
          <span>{"Cancel"}</span>
        </Button> */}
      </ModalFooter>
    </Form>
  )
}
