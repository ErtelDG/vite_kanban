// store.js
import { createStore } from "vuex";

export default createStore({
   state: {
      SlideNewContactActive: false,
      SlideNewTaskActive: false,
      SlideCurrentTaskActive: true,
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
   },
   actions: {
      // Ihre Aktionen hier
   },
   getters: {
      // Ihre Getter hier
   },
});
