var config = {
  dataSource: data,

  cluster: true,

  nodeTypes: {"node_type":
                [
                 "candidate",
                 "contributor"
                ]
               },
  nodeCaption: function(n) {
    if(n.node_type === "candidate") {
      return n.candidate
    } else {
      return n.contributor
    }
  },

  nodeMouseOver : function(n) {
        return n.amount
  },

  rootNodeRadius: 20,

  nodeRadius: function(n) {
    if(n.node_type === "candidate") {
      return (10)
      // n.amount * .0005
    } else {
      return (30)
    }
  },

  edgeWidth: function(e) {
    return (e.contributed * .0005)
  },

  directedEdges: true,
  edgeArrowSize: .05,

  alpha: .1,

  showControlDash: true,

  showStats: true,
  nodeStats: true,

  showFilters: true,
  nodeFilters: true,

  captionToggle: true,
  edgesToggle: true,
  nodesToggle: true,
  toggleRootNotes: false,

  zoomControls: true
};
