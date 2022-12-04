import React from "react"
import ImageUploading from "react-images-uploading"

function UploadImage(props) {
  const [images, setImages] = React.useState([])
  const [imageProps, setImageProps] = React.useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload-tools">
            <div className="select">
              <button
                className="btn btn-default btn-sm custom-button"
                //     style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Choose File
              </button>
              <div className="delete">
                <button
                  onClick={() => setImages([""])}
                  className="btn btn-danger  btn-sm"
                >
                  Delete
                </button>
              </div>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  {props.setImageProps(image["data_url"])}
                  {props.setImageName(image?.file?.name)}

                  {/* <img src={image["data_url"]} alt="" width="100" /> */}
                  <div className="image-item__btn-wrapper">
                    {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                    {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                  </div>
                  {console.log(imageProps, "props")}
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
export default UploadImage
