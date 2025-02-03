import { produce } from "immer";
import { create } from "zustand";

const settingStore = create((set, get) => ({
  SignalRowData: {},
  SignalBodyDatas: [
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

  SignalHeadDatas: [
    { heading: "S.No", position: "relative" },
    { heading: "Signal name", position: "relative" },
    { heading: "Created on", position: "relative" },
    { heading: "Modified on", position: "relative" },
    { heading: "Status", position: "relative" },
    { heading: "Action", position: "sticky" },
  ],
  FeedBackDatas: [
    {
      value: 1,
      chartDesc: "Completely away",
    },
    {
      value: 2,
      chartDesc: "Need to improve a lot",
    },
    {
      value: 3,
      chartDesc: "Need to improve",
    },
    {
      value: 4,
      chartDesc: "Good",
    },
    {
      value: 5,
      chartDesc: "Very good",
    },
    {
      value: 6,
      chartDesc: "Spectacular",
    },
    {
      value: 7,
      chartDesc: "Impactful",
    },
  ],
  DepartmentBodyDatas: [
    {
      id: 1,
      department: "Design",
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
      department: "Product",
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
      department: "Management",
      cday: "08 Feb 2023",
      ctime: "04:40 PM",
      mday: "08 Feb 2023",
      mtime: "04:40 PM",
      status: true,
      active: false,
      dialog: false,
    },
  ],
  handleChange: (key, value) =>
    set(
      produce((state) => {
        state.SignalRowData = {
          ...state.SignalRowData,
          [key]: value,
        };
      })
    ),
  addSignalBody: () =>
    set(
      produce((state) => {
        const Data = get().SignalRowData;
        state.SignalBodyDatas.push(Data);
      })
    ),
  replaceSignalBody: (oldItem) =>
    set((state) => {
      const Data = get().SignalRowData;
      return {
        ...state,
        SignalBodyDatas: state.SignalBodyDatas.map((item) =>
          item.id === oldItem
            ? {
                ...item,
                signal: Data.signal,
                mday: Data.mday,
                mtime: Data.mtime,
              }
            : item
        ),
      };
    }),
  handleActiveButton: (oldItem) =>
    set((state) => {
      const Data = get().SignalRowData;
      console.log(Data);
      return {
        ...state,
        SignalBodyDatas: state.SignalBodyDatas.map((item) =>
          item.id === oldItem
            ? Data.dialog
              ? { ...item, active: Data.active, dialog: Data.dialog }
              : { ...item, status: Data.status, active: Data.active }
            : item
        ),
      };
    }),

  handleDeactiveButton: (index) =>
    set((state) => {
      const Data = get().SignalRowData;
      return {
        SignalBodyDatas: state.SignalBodyDatas.map((item) =>
          item.id === index
            ? Data.status
              ? { ...item, status: !Data.status, dialog: Data.dialog }
              : { ...item, status: !Data.status, dialog: Data.dialog }
            : item
        ),
      };
    }),
  removeFeedBackType: (index) =>
    set((state) => ({
      FeedBackDatas: state.FeedBackDatas.filter((element, i) => i !== index),
    })),
  addDepartmentRow: ({ department, cday, ctime, mtime, mday, status }) =>
    set(
      produce((state) => {
        state.DepartmentBodyDatas.push({
          department: department,
          cday: cday,
          ctime: ctime,
          mtime: mtime,
          mday: mday,
          status: status,
        });
      })
    ),
  replaceDepartmentRow: ({ oldItem, newItem, day, time }) =>
    set((state) => ({
      DepartmentBodyDatas: state.DepartmentBodyDatas.map((item) =>
        item.department === oldItem
          ? { ...item, department: newItem, mday: day, mtime: time }
          : item
      ),
    })),
  handleDepartmentActiveButton: ({ oldItem, status, active, dialog }) =>
    set((state) => ({
      DepartmentBodyDatas: state.DepartmentBodyDatas.map((item) =>
        item.id === oldItem
          ? dialog
            ? { ...item, active: active, dialog: dialog }
            : { ...item, status: status, active: active }
          : item
      ),
    })),

  handleDepartmentDeactiveButton: ({ status, index, dialog }) =>
    set((state) => ({
      DepartmentBodyDatas: state.DepartmentBodyDatas.map((item) =>
        item.id === index
          ? status
            ? { ...item, status: false, dialog: dialog }
            : { ...item, status: true, dialog: dialog }
          : item
      ),
    })),
}));

export default settingStore;
