let actions = {
  addItem: function(id) {
    return {
      type: "ADD_ITEM",
      id: id
    };
  },
  deleteItem: function(id) {
    return {
      type: "DELETE_ITEM",
      id: id
    };
  },
  qty: function(id) {
    return {
      type: "QTY",
      id: id
    };
  }
};

export default actions;
