import empty from "is-empty";
import HandlerError from "../utils/HandleError";

export async function request({ method, path, customHeaders, params }) {
  const headers = { "Content-Type": "application/json" };

  if (!empty(customHeaders)) {
    Object.assign(headers, customHeaders);
  }

  try {
    const res = await fetch(process.env.BACKEND_URL + path, {
      method,
      headers,
      body: JSON.stringify(params),
    });
    if (!res.ok) {
      const { message } = await res.json();
      HandlerError(message, "error");
      throw error(`${message}`);
    }
    const body = await res.json();
    HandlerError(body.message, "success");
    return body.data;
  } catch ({ error }) {
    HandlerError(error);
    return error;
  }
}
