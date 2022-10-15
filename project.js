// Chapter 7 Project: A Robot

// Meadowfield 11 places and 14 roads between them
const roads = [
    "Alice's House-Bob's House", 
    "Alice's House-Cabin",
    "Alice's House-Post Office", 
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", 
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House", 
    "Grete's House-Farm",
    "Grete's House-Shop", 
    "Marketplace-Farm",
    "Marketplace-Post Office", 
    "Marketplace-Shop",
    "Marketplace-Town Hall", 
    "Shop-Town Hall"
];

// converting list of roads to a datastructure
function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }
        else{
            graph[from].push(to);
        }
    }
    arr = edges.map(r => r.split("-"));
    for(let [from, to] of arr){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);



console.log(roadGraph);
    















    