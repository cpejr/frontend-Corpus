import { useState } from "react";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { AddButton } from "./Styles";
import { toast } from "react-toastify";
import { useUploadChunkBase64 } from "../../../hooks/query/videos.js";

export default function UploadButton({
  inputKey,
  label,
  setValue,
  placeholder,
  allowedMimeTypes,
  messageError1,
  messageError2,
}) {
  const [file, setFile] = useState(null);
  const CHUNK_SIZE = 1 * 1024 * 1024; //aqui ta 1mb mas para ajustar eh soh ajustar o primeiro numero

  const uploadChunkMutation = useUploadChunkBase64();

  async function readFileInBase64Chunks(file, onChunk) {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    console.log(`Tamanho total do arquivo: ${file.size} bytes`);
    console.log(`Total de chunks: ${totalChunks}`);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const base64Chunk = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(chunk);
      });

      await onChunk(base64Chunk, i, totalChunks);
    }
  }

  const handleChange = async (info) => {
    const { originFileObj } = info?.fileList[0] || {};

    if (originFileObj) {
      try {
        setFile(originFileObj);
        const filename = originFileObj.name;

        await readFileInBase64Chunks(originFileObj, async (base64Chunk, index, total) => {
          await uploadChunkMutation.mutateAsync({
            chunk: base64Chunk,
            index,
            filename,
            totalChunks: total,
          });
        });


        setValue(label, filename);
      } catch (error) {
        toast.error(messageError1);
        console.error("Erro ao processar arquivo:", error);
      }
    } else {
      setFile(null);
      toast.error(messageError2);
    }
  };

  const props = {
    onRemove: () => {
      setFile(null);
      setValue(label, null);
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
