// import { useEffect, useState, useCallback } from "react"
// import { axios } from "@lib/axios"

// export const useCloudinary = () => {
//   const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME
//   const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`
//   const cloudinaryDeleteUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/destroy`

//   if (!uploadPreset || !cloudinaryUploadUrl) {
//     return
//   }

//   const upload = async (files) => {
//     const uploadPromises = Array.from(files).map((file) => {
//       const formData = new FormData()
//       formData.append("file", file)
//       formData.append("upload_preset", uploadPreset)

//       return axios.post(cloudinaryUploadUrl, formData)
//     })

//     try {
//       const responses = await Promise.all(uploadPromises)
//       return responses.map((response) => response.data)
//     } catch (err) {
//       throw err
//     }
//   }

//   const remove = async (publicId) => {
//     const [apiKey, timestamp, signature] = ""
//     try {
//       const response = await axios.post(cloudinaryDeleteUrl, {
//         public_id: publicId,
//         api_key: apiKey,
//         timestamp: timestamp,
//         signature: signature,
//       })
//       return response.data
//     } catch (err) {
//       throw err
//     }
//   }

//   return {
//     upload,
//     remove,
//   }
// }
