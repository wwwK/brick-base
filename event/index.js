import Vue from "vue";

const cache = {};

let waitting = false;
const waittingQueue = [];

const eventManage = {
  setWaiting(status) {
    if(waitting === status) return;
    waitting = status;
    if(!status) eventManage.flushWaitingQueue();
  },
  flushWaitingQueue() {
    waittingQueue.forEach(fn => fn.call(null));
    waittingQueue.length = 0;
  },
  sub(event, cb = () => {}) {
    if(!cache[event]) cache[event] = [];
    cache[event].push(cb);
  },
  pub(event, payload) {
    if(waitting) {
      const wrapperOnEmit = () => eventManage.emit(event, payload);
      waittingQueue.push(wrapperOnEmit);
    } else {
      if(!cache[event]) return;
      const cbs = cache[event];
      cbs.forEach(fn => fn.call(null, payload));
    }
  },
  install(vue) {
    Vue.prototype.$event = this;
  }
};

export default eventManage;