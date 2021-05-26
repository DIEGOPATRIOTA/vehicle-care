export default {
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