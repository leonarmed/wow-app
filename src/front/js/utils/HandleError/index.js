import { toast } from "react-toastify";

const HandlerError = (message, type) => {
  if (type == "error") {
    toast.error(message);
  } else if (type == "success") {
    toast.success(message);
  }
};

export default HandlerError;
