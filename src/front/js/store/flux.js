import { request } from "../services/api";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      API_URL: "https://www.swapi.tech/api",
      message: null,
      isLoading: false,
      me: {},
      events: [],
      filters: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      request: async (path) => {
        try {
          const store = getStore();
          const res = await fetch(store.API_URL + path);
          if (!res.ok)
            throw new Error(`Invalid response, Response status: ${res.status}`);
          const body = await res.json();
          return body.results ? body.results : body.result;
        } catch (error) {
          console.log(error);
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      saveUserInfo: (data) => {
        const store = getStore();
        setStore({ me: data });
      },
      getEvents: async () => {
        const store = getStore();
        await fetch(`${process.env.BACKEND_URL}/api/events`)
          .then(async (res) => {
            if (!res.ok) {
              const { message } = await res.json();
              throw message;
            }
            const data = await res.json();
            setStore({ events: data });
          })
          .catch((error) => {
            HandlerError(error, "error");
          });
      },
      getUserInfo: async function () {
        const actions = getActions();
        try {
          const response = await request({
            method: "GET",
            path: "/api/user",
            customHeaders: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          actions.saveUserInfo(response);
        } catch (error) {
          window.location.pathname = "/";
          actions.logout();
          console.log(error);
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        setStore({ me: {} });
      },
      isLoading: (state) => {
        setStore({ isLoading: state });
      },
      saveFilter: (newFilter) => {
        setStore({ filter: newFilter })
      }
    },
  };
};

export default getState;