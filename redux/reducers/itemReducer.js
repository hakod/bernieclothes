const uuidv4 = require("uuid/v4");

let itemReducer = function(item = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        {
          item: action.id,
          id: uuidv4()
        },
        ...item
      ];

    case "DELETE_ITEM":
      return item.filter(item => {
        return item.id !== action.id;
      });

    default:
      return item;
  }
};

export default itemReducer;
