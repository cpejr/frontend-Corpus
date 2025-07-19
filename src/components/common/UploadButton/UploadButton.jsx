import { useState } from "react";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { AddButton } from "./Styles";
import { toast } from "react-toastify";

export default function UploadButton({
  inputKey,
  setValue,
  placeholder,
  allowedMimeTypes,
  messageError1,
  messageError2,
}) {
  const [file, setFile] = useState(null);

  const handleChange = (info) => {
    const { originFileObj } = info?.fileList[0] || {};

    if (originFileObj) {
      try {
        setFile(originFileObj);
        setValue(inputKey, originFileObj);
      } catch (error) {
        toast.error(messageError1);
      }
    } else {
      setFile(null);
      setValue(inputKey, null);
      toast.error(messageError2);
    }
  };

  const props = {
    onRemove: () => {
      setFile(null);
      setValue(inputKey, null);
    },
    fileList: file ? [file] : [],
    multiple: false,
    accept: allowedMimeTypes,
  };

  return (
    <div>
      <Upload
        name={inputKey}
        onChange={handleChange}
        beforeUpload={() => false}
        maxCount={1}
        {...props}
      >
        <AddButton icon={<UploadOutlined />}>{placeholder}</AddButton>
      </Upload>
    </div>
  );
}

UploadButton.defaultProps = {
  color: "white",
};

UploadButton.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  allowedMimeTypes: PropTypes.string.isRequired,
  inputKey: PropTypes.string.isRequired,
  messageError1: PropTypes.string.isRequired,
  messageError2: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
