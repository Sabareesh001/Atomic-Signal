import { produce } from "immer";
import { create } from "zustand";

export const settingStore = create(() => ({
  BodyDatas: [
    {
      id: 1,
      signal: "Communication",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
    {
      id: 2,
      signal: "Efficiency",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
    {
      id: 3,
      signal: "Time Management",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
    {
      id: 4,
      signal: "Attitude",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
    {
      id: 5,
      signal: "Unavailable",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
  ],

  HeadDatas: [
    { heading: "S.No", position: "relative" },
    { heading: "Signal name", position: "relative" },
    { heading: "Created on", position: "relative" },
    { heading: "Modified on", position: "relative" },
    { heading: "Status", position: "relative" },
    { heading: "Action", position: "sticky" },
  ],
  //   addSignalBody : ({signal , cday , ctime , mtime , mday , status}) =>
  //     set(
  //         produce( (state) =>{
  //     state.BodyDatas.push({signal : signal ,cday : cday ,ctime : ctime ,mtime : mtime ,mday : mday ,status : status});
  //   })),
  //   replaceSignalBody : ({oldItem , newItem , day ,time}) => set(state =>{
  //     // console.log(state);
  //     return state.map((item) =>
  //       item.signal === oldItem
  //         ? { ...item, signal: newItem, mday: day, mtime: time }
  //         : item
  //     );
  //   }),
  //   handleActiveButton : ({oldItem , status , active , dialog}) => set( state => {
  //     // console.log(state[4].id)
  //     if (dialog) {
  //       return state.map((item, index) =>
  //         item.id === oldItem
  //           ? { ...item, active: active, dialog: dialog }
  //           : item
  //       );
  //     } else {
  //       return state.map((item, index) =>
  //         item.id === oldItem
  //           ? { ...item, status: status, active: active }
  //           : item
  //       );
  //     }
  //   }),
  //   handleDeactiveBox : ({status, index, dialog}) => set( state => {
  //     if (status === true) {
  //       return state.map((item) =>
  //         item.id === index ? { ...item, status: false, dialog: dialog } : item
  //       );
  //     } else if (status === false) {
  //       return state.map((item) =>
  //         item.id === index ? { ...item, status: true, dialog: dialog } : item
  //       );
  //     }
  //   }),
}));
