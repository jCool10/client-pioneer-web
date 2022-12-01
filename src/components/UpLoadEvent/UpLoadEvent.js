import React, { useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'


const UpLoadEvent = () => {
  const API_URl = "https://noteyard-backend.herokuapp.com"
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("uploadImg", file);
            fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body
            })
              .then((res => res.json()))
              .then((res) => {
                resolve({ default: `${API_URl}/${res.url}` })
              })
              .catch((err) => {
                reject(err);
              })
          })
        })
      }
    }
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    }
  }

  const [value, setValue] = useState('');

  const createMarkup = () => {
    return { __html: value };
  };

  return (
    <section>
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin]
        }}
        editor={Editor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          console.log(data)
          setValue(data)
        }}
      />
      <div>{value}</div>
      <div dangerouslySetInnerHTML={createMarkup()} ></div>
    </section>
  )
}

export default UpLoadEvent;