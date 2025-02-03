import { produce } from "immer";
import { create } from "zustand";

const teamStore = create((set, get) => ({
  TeamRowData: {},
  TeamRowDatas: [
    {
      id: 1,
      profile: {
        name: "Ramesh",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh Kumaran",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: true,
      active: false,
      dialog: false,
    },

    {
      id: 2,
      profile: {
        name: "Kumaresan",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Bad",
          bgcolor: "red",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: true,
      active: false,
      dialog: false,
    },
  ],
  handleTeamChange: (key, value) => {
    set((state) => ({
      ...state,
      TeamRowData: {
        ...state.TeamRowData,
        [key]: value,
      },
    }));
  },
  handleTeamActiveButton: (oldItem) =>
    set((state) => {
      const Data = get().TeamRowData;
      console.log(Data);
      return {
        ...state,
        TeamRowDatas: state.TeamRowDatas.map((item) =>
          item.id === oldItem
            ? Data.dialog
              ? { ...item, active: Data.active, dialog: Data.dialog }
              : { ...item, status: Data.status, active: Data.active }
            : item
        ),
      };
    }),

  handleTeamDeactiveButton: (index) =>
    set((state) => {
      const Data = get().TeamRowData;
      return {
        TeamRowDatas: state.TeamRowDatas.map((item) =>
          item.id === index
            ? Data.status
              ? { ...item, status: !Data.status, dialog: Data.dialog }
              : { ...item, status: !Data.status, dialog: Data.dialog }
            : item
        ),
      };
    }),
  handleAddTeamMemnber: () =>
    set(
      produce((state) => {
        const Data = get().TeamRowData;
        state.TeamRowDatas.push({
          id: state.TeamRowDatas.length + 1,
          profile: {
            name: Data.name,
            image:
              "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          },
          designation: Data.designation,
          department: Data.departmemt_name,
          signals: [
            {
              name: "Excellent",
              bgcolor: "darkgreen",
              last_updated: "07 Feb '23, 11:30 AM",
            },
            {
              name: "Good",
              bgcolor: "green",
              last_updated: "07 Feb '23, 11:30 AM",
            },
            {
              name: "Moderate",
              bgcolor: "orange",
              color: "black",
              last_updated: "07 Feb '23, 11:30 AM",
            },
          ],
          performance: 90,
          reporting_to: [
            {
              image:
                "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
              name: Data.reporting_name,
            },
          ],
          role: Data.role,
          email: Data.email,
          experience: "3 yrs 4 Mon",
          status: true,
          active: false,
          dialog: false,
        });
      })
    ),
  handleTeamUpdateMember: (i) =>
    set((state) => {
      const Data = get().TeamRowData;
      return {
        ...state,
        TeamRowDatas: state.TeamRowDatas.map((item) =>
          item.id === i
            ? {
                ...item,
                profile: {
                  ...item.profile,
                  name: Data.name,
                },
                designation: Data.designation,
                department: Data.departmemt_name,
                reporting_to: [
                  {
                    name: Data.reporting_name,
                    ...item.reporting_to[0],
                  },
                ],
                role: Data.role,
                email: Data.email,
              }
            : item
        ),
      };
    }),
}));

export default teamStore;
