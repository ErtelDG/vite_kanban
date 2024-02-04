// store.js
import { createStore } from "vuex";

export default createStore({
   state: {
      SlideNewContactActive: false,
      SlideNewTaskActive: false,
      SlideCurrentTaskActive: true,
      contacts: Object,
      categories: Object,
      tasks: Object,
   },
   mutations: {
      toggleSlideNewContact(state) {
         state.SlideNewContactActive == true ? (state.SlideNewContactActive = false) : (state.SlideNewContactActive = true);
      },
      toggleSlideNewTask(state) {
         state.SlideNewTaskActive == true ? (state.SlideNewTaskActive = false) : (state.SlideNewTaskActive = true);
      },
      toggleSlideCurrentTask(state) {
         state.SlideCurrentTaskActive == true ? (state.SlideCurrentTaskActive = false) : (state.SlideCurrentTaskActive = true);
      },
      update_state_response(state, { URL, result }) {
         switch (URL) {
            case "contacts":
               state.contacts = result;
               break;
            case "categories":
               state.categories = result;
               break;
            case "tasks":
               state.tasks = result;
               break;
            default:
               console.log("Cannot set data response, state data not found: ", URL);
               break;
         }
      },
   },
   actions: {
      fetchData({ commit }, URL) {
         var requestOptions = {
            method: "GET",
            redirect: "follow",
         };
         fetch(`http://localhost:8080/${URL}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
               commit("update_state_response", { URL, result });
            })
            .catch((error) => console.log("error", error));
      },
   },
   getters: {
      // Ihre Getter hier
   },
});
