import { configureStore } from "@reduxjs/toolkit";
import { signalsbodyReducer, signalsheadReducer } from "./slices/signalsslice";
import { feedBackReducer } from "./slices/feedbackslice";

const Store = configureStore({
  reducer: {
    signalsBody: signalsbodyReducer,
    signalsHead: signalsheadReducer,
    feedBacktype: feedBackReducer,
  },
});

export default Store;