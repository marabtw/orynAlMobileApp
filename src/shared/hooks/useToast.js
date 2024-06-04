import { Toast } from "toastify-react-native"

export const useToast = () => {
  const showToast = (message = "no message", type = "info") => {
    const toastMethod = {
      success: Toast.success,
      error: Toast.error,
      warning: Toast.warn,
      info: Toast.info,
    }[type && type.trim().toLowerCase()]


    if (!toastMethod) {
      console.log(`Invalid toast type: ${type}`)
      return
    }

    toastMethod(message)
  }
  return showToast
}
