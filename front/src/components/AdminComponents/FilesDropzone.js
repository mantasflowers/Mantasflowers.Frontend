import { useRef, useState } from "react";
import { Box } from "@material-ui/core";

export default function ImageUploader({ handleImage, imageBefore }) {
  const fileSelect = useRef(null);
  const [image, setImage] = useState(imageBefore ? imageBefore : null);
  const [progress, setProgress] = useState(0);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      uploadFile(files[i]);
    }
  }

  function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    // replace this with your upload preset name
    formData.append("upload_preset", "lhkb69ku");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch(
      "https://api.Cloudinary.com/v1_1/mantasflowers/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setImage(res.secure_url);
        handleImage(res.secure_url);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column", maxWidth: 400 }}>
      {image && (
        <img
          className="object-contain rounded-lg"
          src={image.replace("upload/", "upload/w_600/")}
          style={{ height: 400, width: 400 }}
        />
      )}
      <div className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg">
        <form className="flex justify-center items-center h-full">
          {progress === 0 ? (
            <div className="text-gray-700 text-center">
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                onClick={handleImageUpload}
                type="button"
              >
                Įkelti produkto nuotrauką
              </button>
            </div>
          ) : (
            <span className="text-gray-700">{progress}%</span>
          )}

          <input
            ref={fileSelect}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </form>
      </div>
    </Box>
  );
}
