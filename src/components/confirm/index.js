import Vue from "vue";
import Confirm from "./confirm.vue";

const MessageBox = Vue.extend(Confirm);

Confirm.install = (options, type) => {
  if (options === undefined || options === null) {
    options = {
      content: "",
    };
  } else if (typeof options === "string" || typeof options === "number") {
    options = {
      content: options,
    };
    if (type != undefined && options != null) {
      options.type = type;
    }
  }

  let instance = new MessageBox({
    data: options,
  }).$mount();

  document.body.appendChild(instance.$el);

  return instance.confirm();
};

export default Confirm;
