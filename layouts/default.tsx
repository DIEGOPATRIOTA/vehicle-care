// @ts-ignore
import TheSystemBar from "@/components/TheSystemBar/TheSystemBar.vue";
// @ts-ignore
import TheHeader from "@/components/TheHeader/TheHeader.vue";
// @ts-ignore
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";
// @ts-ignore
import TheContainer from "@/components/TheContainer/TheContainer.vue";
// @ts-ignore
import TheFooter from "@/components/TheFooter/TheFooter.vue";

export default {
  components: {
    TheSystemBar,
    TheHeader,
    TheSidebar,
    TheContainer,
    TheFooter
  },
  data: () => ({
    drawer: true,
    mini: true,
    userName: "Diego Patriota",
    items: [
      {
        icon: "mdi-apps",
        title: "Welcome",
        to: "/",
      },
      {
        icon: "mdi-chart-bubble",
        title: "Inspire",
        to: "/inspire",
      },
    ],
  }),
};
