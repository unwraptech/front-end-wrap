import React, { Component } from "react";
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

class UploadImage extends Component{
constructor(props){
    super(props);
    this.state={
        fileList:[{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          }]
    }
}
 onChange = ({ fileList: newFileList }) => {

this.setState({fileList:newFileList})};

   onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
render(){
    return(
        <div>
            {/* <ImgCrop rotate> */}
      <Upload
        action="http://localhost:4000/upload/uploadprofilepicture"
        listType="picture-card"
        fileList={this.state.file}
        onChange={this.onChange}
        onPreview={this.onPreview}
      >
        {this.state.fileList.length < 5 && '+ Upload'}
      </Upload>
    {/* </ImgCrop>  */}
        </div>
    )
}

}

export default UploadImage;