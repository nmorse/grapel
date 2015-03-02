// grapel.js
// chainable graph query (gq)
// Usage: select_nodes = gq.using(some_graph).find({node:{property:"value"}}).nodes();

(function($) {
  var grapel = {};
  gq = {
		"using": function(g) {
			grapel = g;
			return this;
		},
		"find": function(sel) {
			var res = {};
			if (!grapel) {
			  console.log('qg.find has an undefined grapel.');
			  return res;
			}
			if (sel.element === "node") {
				res.nodes = [];
				$.each(grapel.nodes, function(i, n) {
					if (sel.id && sel.id === n.id) {
						res.nodes.push(n);
						return false;
					}
					if (sel.type && n[sel.type]) {
						res.nodes.push(n);
					}
				});
			}
			else if (sel.element === "edge") {
				res.edges = [];
				$.each(grapel.edges, function(i, e) {
					if ((!sel.type || sel.type === 'all' || e.edge_type === sel.type) &&
						(!sel.from || e.from === sel.from) &&
						(!sel.to || e.to === sel.to)
					) {
						res.edges.push(e);
					}
				});
			}
			grapel = res;
			return this;
		},
		"edges": function() {
			return grapel.edges;
		},
		"nodes": function() {
			return grapel.nodes;
		},
		"graph": function() {
			return grapel;
		},
		"node_index": function(id) {
		  var node_index = -1;
			$.each(grapel.nodes, function(i, n) {
				if (id === n.id) {
					node_index = i;
				}
			});
			return node_index;
		}
	};
})(JQuery);
