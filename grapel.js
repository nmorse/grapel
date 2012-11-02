// grapel.js
// usage:
// grapel.load({nodes:[{"name":"n0"}, {"name":"n1"}], edges:[[0, 1, "e1"]]});
// grapel.lookup_node({"edge_index":0, "direction":"from"});
//       --> {"name":"a"}
// grapel.lookup_edges({"node_index":0, "direction":"out"});
//       --> [[0, 1, "e1"]]
(function($) {
    graphel = {
        load:function(cg) {this.g = cg;},
        lookup_node:function(args) {
            var edge_attr_index = args.direction === 'from'? 0: args.direction === 'to'? 1: false;
            var edge = this.g.edges[args.edge_index];
            return this.g.nodes[edge[edge_attr_index]];
        },
        lookup_edges:function(args) {
            var edge_index = args.direction === 'in'? 1: args.direction === 'out'? 0: false;
            var result = [];
            $.each(this.g.edges, function(i, edge) {
                if(edge[edge_index] === args.node_index) {
                    result.push(edge);
                }
            });
            return result;
        }
    };
})(jQuery);
