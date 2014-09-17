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
    if(n.nodeType === "candidate") {
      return n.properties.candidateName + ": $" + n.properties.total
    } else  if (n.nodeType === "contributor") {
      return n.properties.contributorPayee + ": $" + n.properties.total
    }
  },

  rootNodeRadius: 20,

  nodeRadius: function(n) {
    if(n.node_type === "candidate") {
      return (10)
      // n.amount * .0005
    } else if (n.node_type === "contributor") {
      return (30)
    }
  },

  edgeCaption: function(e) {
    return "$" + e.total
  },

  edgeWidth: function(e) {
    return (e.total * .0005)
  },

  collisionDetection: true,

  directedEdges: true,
  edgeArrowSize: 5,

  showControlDash: true,

  showStats: true,
  nodeStats: true,

  showFilters: true,
  nodeFilters: true,

  captionToggle: true,
  edgesToggle: true,
  nodesToggle: true,
  toggleRootNotes: false,

  search: true,

  zoomControls: true
};
