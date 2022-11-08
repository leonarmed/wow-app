import empty from "is-empty";
import HandlerError from "../utils/HandleError";

export async function request({ method, path, customHeaders, params }) {
  const headers = { "Content-Type": "application/json" };

  if (!empty(customHeaders)) {
    Object.assign(headers, customHeaders);
  }

  const res = fetch(process.env.BACKEND_URL + path, {
    method,
    headers,
    body: JSON.stringify(params),
  })
    .then(async (res) => {
      if (!res.ok) {
        const { message } = await res.json();
        throw Error(`${message}`);
      }
      const body = await res.json();
      HandlerError(body.message, "success");
      return body.data;
    })
    .catch(async (error) => {
      const { message } = error;
      HandlerError(message, "error");
    });
  return res;
}
