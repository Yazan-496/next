import React, { useState } from "react"
import UploadService from "./FileUploadService"
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Progress
} from "reactstrap"
import Image from "next/image"
import fileicon from "./file.png"

export default function UploadImageDialog({
  open,
  handleClose,
  handleFinishUpLoadSuccessfully,
  handleAdd,
  dialogTitle,
  folder,
  pathupload = undefined
}) {
  const [selectedFiles, setSelectedFiles] = useState(undefined)
  const [finishuploadSuccessfully, setfinishuploadSuccessfully] =
    useState(undefined)
  const [currentFile, setCurrentFile] = useState(undefined)
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [fileInfos, setFileInfos] = useState([])

  const selectFile = (event) => {
    setSelectedFiles(event.target.files)
    console.log(event.target.value, "event.target.files")
    //     setImagePath(event.target.value)
  }
  const addAndClose = () => {
    setImagePath("")
    setMessage("")
    handleAdd(fileInfos)
  }

  const checkURL = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) !== null
  }

  const upload = () => {
    const currentFile = selectedFiles[0]
    setProgress(0)
    setCurrentFile(currentFile)
    if (pathupload !== undefined) {
      UploadService(
        currentFile.name.split(".")[0],
        `collection1/${folder}`,
        currentFile,
        (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total))
        }
      )
        .then((response) => {
          setFileInfos(response.data.file_path)
          setImagePath(
            `${process.env.NEXT_PUBLIC_FILE_PATH}${response.data.file_path}`
          )
          handleFinishUpLoadSuccessfully(
            `${process.env.NEXT_PUBLIC_FILE_PATH}${response.data.file_path}`
          )
          setMessage("uploaded successfully")
          setfinishuploadSuccessfully(1)
          return response.data
        })
        .catch(() => {
          setProgress(0)
          setCurrentFile(undefined)
        })
    }
  }
  return (
    <Modal centered isOpen={open}>
      <ModalHeader closeButton id="form-dialog-title">
        <span
          onClick={handleClose}
          style={{ position: "absolute", right: "21px", cursor: "pointer" }}
        >
          x
        </span>
        {dialogTitle}
      </ModalHeader>
      <ModalBody id="form-dialog-title">
        <div>
          {currentFile && (
            <div>
              <div className="text-center">{progress}%</div>
              <Progress value={progress} />
            </div>
          )}
          <label className="btn btn-default">
            <input type="file" onChange={selectFile} />
          </label>
          <div className="alert alert-light" role="alert">
            {message}
          </div>
          <div>
            {imagePath && !checkURL(imagePath) && (
              <Image src={fileicon} width={"250px"} height={"150px"} />
            )}
            {checkURL(imagePath) && (
              <Image src={imagePath} width={"250px"} height={"150px"} />
            )}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button
          className="btn btn-primary"
          disabled={!selectedFiles}
          onClick={upload}
        >
          Upload
        </button>

        <button
          closeButton
          className="btn btn-primary"
          disabled={!finishuploadSuccessfully}
          onClick={(event) => addAndClose(fileInfos)}
        >
          add
        </button>
      </ModalFooter>
    </Modal>
  )
}
