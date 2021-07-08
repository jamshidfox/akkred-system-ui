import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { getCookie } from 'utils/cookie'
import { InputLabel } from 'components/UI'

const TinyEditor = (props) => {
  const { input, label } = props
  const onChange = (event) => {
    const content = event.target.getContent()

    input.onChange(content)
  }
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Editor
        apiKey="frndwqb6jianf3b91p0a8rdo97a72szy0tudbi55hsdv8vwl"
        initialValue={input.value}
        init={{
          height: 350,
          menubar: 'file edit view insert format tools table tc help',
          plugins: [
            'advlist autolink lists link image media',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'paste imagetools'
          ],
          toolbar:
            `undo redo | formatselect | bold italic | 
            alignleft aligncenter alignright | 
            bullist numlist outdent indent | help`,
          paste_data_images: true,
          image_advtab: true,
          images_upload_url: `https://akkred.uz:8080/main/file/?token=${getCookie('token')}`
        }}
        onChange={onChange}
      />
    </>
  )
}

export default TinyEditor
