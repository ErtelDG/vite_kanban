// store.js
import { createStore } from "vuex";

function groupByStatus(jsonData) {
   const groupedData = {};
   for (const key in jsonData) {
      const status = jsonData[key].status;
      if (!(status in groupedData)) {
         groupedData[status] = [];
      }
      groupedData[status].push(jsonData[key]);
   }
   return groupedData;
}

function sortedData(data) {
   return Object.fromEntries(
      Object.entries(data).sort((a, b) => {
         const order = ["ToDo", "Progress", "Feedback", "Done"];
         return order.indexOf(a[0]) - order.indexOf(b[0]);
      })
   );
}

export default createStore({
   state: {
      SlideNewContactActive: false,
      SlideNewTaskActive: false,
      SlideCurrentTaskActive: false,
      contacts: Object,
      categories: Object,
      tasks: Object,
      subtasks: Object,
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
               let response = groupByStatus(result);
               state.tasks = sortedData(response);
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
