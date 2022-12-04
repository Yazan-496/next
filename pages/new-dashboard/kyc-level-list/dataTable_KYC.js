import React, { Fragment, Component, memo } from "react"
import { connect } from "react-redux"
import { FileText, MoreVertical, Send, Plus, Key, User, Trash } from "react-feather"
import DataTable from "@/src/components/datatable"
import {
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap"
import _ from "lodash"
import Breadcrumbs from "@/src/components/breadcrumbs"
import { AbilityContext, _hasAnyAbility } from "@/src/utility/context/Can"
import { _getKycList, _deleteKyc } from "../../../redux/actions"
import CanCall from "./CanCall"
import KycModal from "./KycModal"
//************************************//
const tableColumns = (state, _editKycModal, openKyc, hasAction, languages) => [
  {
    name: "ID",
    selector: "id",
    sortable: false,
    minWidth: "50px",
    omit: true,
    filter: {
      enabled: false
    }
  },
  {
    name: "KYC LEVEL",
    selector: "kyc_level_translations",
    sortable: true,
    minWidth: "50px",
    filter: {
      enabled: true,
      type: "text"
    },
    cell: (row, index, column, id) => {
      return (
        <div className="">
          {row?.kyc_level_translations?.map((x) => (
            <Row>
              <span>{x?.name}</span>
            </Row>
          ))}
        </div>
      )
    }
  },
  {
    name: "SEQUENCE",
    selector: "sequence",
    sortable: false,
    minWidth: "50px"
  },
  {
    name: "ACTIONS",
    allowOverflow: true,
    //     omit: true,
    cell: (row, index, column, id) => {
      return (
        <div className="d-flex">
          {/* <UncontrolledDropdown>
            <DropdownToggle className="pr-1 show" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <CanCall action="NoPermissionCode" id={`deleteKyc_${row.id}`}>
                <DropdownItem
                  className="w-50 btn-flat-success"
                  onClick={(e) => openKyc(row)}
                >
                  <FileText size={15} />
                  <span className="align-middle ml-50">{"Expand"}</span>
                </DropdownItem>
              </CanCall>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <CanCall action="NoPermissionCode" id={`deleteKyc_${row.id}`}>
            <div className="w-100 btn-flat-success" onClick={(e) => openKyc(row)}>
              <FileText size={20} />
              <a className="">{"Expand"}</a>
            </div>
          </CanCall>
        </div>
      )
    }
  }
]
const tableActions = ["USR_ADD_KYC", "USR_UPDATE_KYC", "USR_DELETE_KYC"]
//************************************//
class KycList extends Component {
  static contextType = AbilityContext
  constructor(props) {
    super(props)
    this.state = {
      KycModal: {
        KycModalShow: false,
        KycModalData: { id: 0, kyc_level_translations: [], sequence: null }
      }
    }
    this._editKycModal = this._editKycModal.bind(this)
    this.openKyc = this.openKyc.bind(this)
  }
  //************************************//
  componentDidMount() {
    if (!this.props?.languages?.length > 0) {
      //  _getLanguages()
    }
  }
  //************************************//
  _closeKycModal = () => {
    this.setState({
      KycModal: {
        KycModalShow: false,
        KycModalData: { id: 0, kyc_level_translations: [], sequence: null }
      }
    })
  }
  //************************************//
  _openKycModal = () => {
    this.setState({
      KycModal: {
        KycModalShow: true,
        KycModalData: { id: 0, kyc_level_translations: [], sequence: null }
      }
    })
  }
  //************************************//
  _editKycModal = (data) => {
    this.setState({
      KycModal: { KycModalShow: true, KycModalData: { ...data } }
    })
  }
  //************************************//
  openKyc = (data) => {
    this.setState({
      KycModal: { KycModalShow: true, KycModalData: { ...data } }
    })
  }
  //************************************//
  render() {
    const { KycModalShow, KycModalData } = this.state.KycModal
    const hasAction = _hasAnyAbility(this.context, tableActions)
    return (
      <Fragment>
        <div className="col-sm-12" id="progress-table">
          <Breadcrumbs
            breadCrumbMainTitle="KYC Level"
            breadCrumbTitle={" "}
            breadCrumbParent=""
            breadCrumbActive=""
          />
          <p style={{ fontWeight: 800, fontSize: 14 }}>Completeness</p>
          <div className="progress-card affix-top">
            <div className="progress-header">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow="100%"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                />
                <div
                  className="progress-details"
                  style={{
                    justifyContent: "center",
                    padding: 10,
                    color: "rgb(255, 255, 255)",
                    fontSize: 14,
                    marginTop: "13px"
                  }}
                >
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
        <>
          <Row>
            <Col sm="12">
              <DataTable
                ref={(ref) => {
                  this.dataTableRef = ref
                }}
                _fetchData={_getKycList}
                columns={tableColumns(
                  this.state,
                  this._editKycModal,
                  this.openKyc,
                  hasAction,
                  this.props.languages
                )}
                hasFilter={false}
              />
            </Col>
          </Row>
        </>

        {KycModalShow && <KycModal role_id={1} data={KycModalData} onClose={this._closeKycModal} />}
      </Fragment>
    )
  }
}
//************************************//
const mapStateToProps = (store) => ({
  loading: store?.app?.loading,
  languages: store?.user?.languages,
  role_id: store?.user?.role_id
})
export default connect(mapStateToProps, null, null, { forwardRef: true })(KycList)
