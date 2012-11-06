grapel
======

A really simple "graph" data structure API and Javascript lib, represented in JSON.

The API for access to the graph
----------------------------------------------------
    grapel.load(json_graph_feed) 
    grapel.lookup_node(edge_id, direction) // direction ["from", "to"]
    grapel.lookup_edges(node_id, direction)// direction ["in", "out"]


    grapel.edges // an array of all edges in the graph
    grapel.nodes // an array of all nodes in the graph
    
