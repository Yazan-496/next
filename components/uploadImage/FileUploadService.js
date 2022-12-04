import { API } from "../../redux/utility/API"

const UploadService = (file_name, custom_file_path, file, onUploadProgress) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("file_name", file_name)
  formData.append("custom_file_path", custom_file_path)
  return API.post(
    `${process.env.NEXT_PUBLIC_FILE_PATH}/api/v1/upload_file`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    }
  )
}

export default UploadService
