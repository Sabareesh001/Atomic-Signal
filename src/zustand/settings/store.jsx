import { produce } from "immer";
import { create } from "zustand";

const settingStore = create((set) => ({
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
  addSignalBody: ({ signal, cday, ctime, mtime, mday, status }) =>
    set(
      produce((state) => {
        state.BodyDatas.push({
          signal: signal,
          cday: cday,
          ctime: ctime,
          mtime: mtime,
          mday: mday,
          status: status,
        });
      })
    ),
  replaceSignalBody: ({ oldItem, newItem, day, time }) =>
    set((state) => ({
      BodyDatas: state.BodyDatas.map((item) =>
        item.signal === oldItem
          ? { ...item, signal: newItem, mday: day, mtime: time }
          : item
      ),
    })),
  handleActiveButton: ({ oldItem, status, active, dialog }) =>
    set((state) => ({
      BodyDatas: state.BodyDatas.map((item) =>
        item.id === oldItem
          ? dialog
            ? { ...item, active: active, dialog: dialog }
            : { ...item, status: status, active: active }
          : item
      ),
    })),

  handleDeactiveBox: ({ status, index, dialog }) =>
    set((state) => ({
      BodyDatas: state.BodyDatas.map((item) =>
        item.id === index
          ? status
            ? { ...item, status: false, dialog: dialog }
            : { ...item, status: true, dialog: dialog }
          : item
      ),
    })),
  removeFeedBackType: (index) =>
    set((state) => ({
      FeedBackDatas: state.FeedBackDatas.filter((element, i) => i !== index),
    })),
}));

export default settingStore;
