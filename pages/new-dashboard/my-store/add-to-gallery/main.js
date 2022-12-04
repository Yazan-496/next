import React from "react"

const Main = () => {
  return (
     <div className="content" id="content">
  <link href="https://assets.abraacdn.com/assets/css/fileinput.css" rel="stylesheet" /><div className="center_point ">
    <div className id="gallery_id">
      <div className="file-input file-input-ajax-new"><div className="file-preview ">
          <div className="close fileinput-remove">×</div>
          <div className="file-drop-zone clickable" tabIndex={-1}><div className="file-drop-zone-title">Drag &amp; drop files here …<br />(or click to select files)</div>
            <div className="file-preview-thumbnails">
            </div>
            <div className="clearfix" />    <div className="file-preview-status text-center text-success" />
            <div className="kv-fileinput-error file-error-message" style={{display: 'none'}} />
          </div>
        </div>
        <div className="kv-upload-progress hide"><div className="progress">
            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}}>
              0%
            </div>
          </div></div>
        <div className="input-group file-caption-main">
          <div tabIndex={500} className="form-control file-caption  kv-fileinput-caption">
            <div className="file-caption-name" />
          </div>
          <div className="input-group-btn">
            <button type="button" tabIndex={500} title="Clear selected files" className="btn btn-default fileinput-remove fileinput-remove-button"><i className="glyphicon glyphicon-trash" />  <span className="hidden-xs">Remove</span></button>
            <button type="button" tabIndex={500} title="Abort ongoing upload" className="btn btn-default hide fileinput-cancel fileinput-cancel-button"><i className="glyphicon glyphicon-ban-circle" />  <span className="hidden-xs">Cancel</span></button>
            <a href="https://www.abraa.com/ajax.php?do=upload-gallery-files" tabIndex={500} title="Upload selected files" className="btn btn-default fileinput-upload fileinput-upload-button"><i className="glyphicon glyphicon-upload" />  <span className="hidden-xs">Upload</span></a>
            <div tabIndex={500} className="btn btn-primary btn-file"><i className="glyphicon glyphicon-folder-open" />&nbsp;  <span className="hidden-xs">Browse …</span><input id="input-id" type="file" multiple className /></div>
          </div>
        </div></div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12" style={{textAlign: 'center !important'}}>
      <h4>Current gallery Items on your store</h4>
    </div>
  </div>
  <div className="col-md-12">
    <div className="col-md-12 product-list">
      <div className="emtpy-message no-reviews text-center">
        <img src="https://assets.abraacdn.com/assets/react-assets/img/no-review.svg" className="img-responsive" alt="no gallery icon" />
        <div className="review-content"><h2>No Gallery Images found </h2></div>
      </div>
    </div>
  </div>
  <div className="col-md-12" style={{textAlign: 'center'}}>
    <ul className="pagination">
    </ul>
  </div>
</div>

  )
}

export default Main
