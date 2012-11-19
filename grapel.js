// grapel.js
// graph structure (format)
//    v0.1_min
// {nodes:[{"name":"n0"}, {"name":"n1"}], edges:[[0, 1, "e1"]]}
//    v0.1_expanded
// {nodes:[{"name":"n0"}, {"name":"n1"}], edges:[["n0", "n1", "e1"]]}
//    v0.2_expanded
// {nodes:{"n0":{}, "n1":{}}, edges:[["n0", "n1", "e1"]]}
// usage:
// grapel.load({nodes:[{"name":"n0"}, {"name":"n1"}], edges:[[0, 1, "e1"]]});
// grapel.lookup_node({"edge_index":0, "direction":"from"});
//       --> {"name":"a"}
// grapel.lookup_edges({"node_index":0, "direction":"out"});
//       --> [[0, 1, "e1"]]
(function($) {
    
    grapel = {
        load:function(cg) {
            this.g = cg;
            this.node_ref_by_type = 'unknown';
            this.node_container_type = 'unknown';
            // Type checking on the graph being loaded...
            if (cg.edges && cg.edges[0] && cg.edges[0][0] && cg.nodes) {
                if (typeof cg.edges[0][0] === 'number' && typeof cg.nodes === 'array') {
                    this.node_ref_type = 'number';
                    this.node_container_type = 'array';
                } 
                if (typeof cg.edges[0][0] === 'string' && typeof cg.nodes === 'object') {
                    this.node_ref_type = 'string';
                    this.node_container_type = 'object';
                } 
            }
        },
        lookup_node:function(args) {
            var edge_attr_index = args.direction === 'from'? 0: args.direction === 'to'? 1: false;
            var edge = this.g.edges[args.edge_index];
            return this.g.nodes[edge[edge_attr_index]];
        },
        lookup_edges:function(args) {
            var edge_index = args.direction === 'in'? 1: args.direction === 'out'? 0: false;
            // A node index is either an integer (index) or a string (a node name), so normalize it as an index.
            var node_index = (this.node_ref_type === 'string')? get_node_by_name(args.node_index): args.node_index;
            var result = [];
            $.each(this.g.edges, function(i, edge) {
                if(edge[edge_index] === args.node_index) {
                    result.push(edge);
                }
            });
            return result;
        }
    };
    var get_node_by_name = function(node_name)  {
        _
    }
    
})(jQuery);
