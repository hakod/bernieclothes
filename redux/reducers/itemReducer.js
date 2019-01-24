const uuidv4 = require("uuid/v4");

let itemReducer = function(item = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        {
          item: action.id,
          id: uuidv4(),
          qty: "1"
        },
        ...item
      ];

    case "QTY":
      console.log(action.id[1]);
      console.log(item.findIndex(x => x.id == action.id[0]));
      let i = item.findIndex(x => x.id == action.id[0]);
      let a = item;
      a[i].qty = action.id[1];
      return [...a];

    case "DELETE_ITEM":
      return item.filter(item => {
        return item.id !== action.id;
      });

    default:
      return item;
  }
};

export default itemReducer;
