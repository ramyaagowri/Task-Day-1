class Graph
{
    constructor()
    {
        this.adjList=new Map();
        this.noOfVertex=this.adjList.size;
    }

    addvertex(a)
    {
        if (!this.adjList.has(a))
        {
            this.adjList.set(a,[]);
        }
    }

    addEdge(a,b)
    {
       if (this.adjList.has(a) && this.adjList.has(b))
       {
        this.adjList.get(a).push(b);
        this.adjList.get(b).push(a);
       }
    }

    printGraph()
    {
        for(let i of this.adjList.keys())
        {
            console.log(`${i} - > ${this.adjList.get(i)}`);
        }
    }

    adjMatrix()
    {
        let arr=[];
        for(let i of this.adjList.keys())
        {
            let arr1=[];
            for(let j of this.adjList.keys())
            {
                if(this.adjList.get(i).includes(j))
                {
                    arr1.push(1);
                }
                else
                {
                    arr1.push(0);
                }
            }
            arr.push(arr1);
        }
      arr.forEach(print);
      function print(elements)
      {
        console.log(...elements);
      }
    }

}
let adjlist=new Graph();
// let val=require("readline-sync");
// while(val=="break")
// {
//     a=val.question("Enter the vertex to add");
//     adjlist.addvertex(a);
// }
adjlist.addvertex(1);
adjlist.addvertex(2);
adjlist.addvertex(3);
adjlist.addvertex(4);
adjlist.addvertex(5);
adjlist.addEdge(1,2);
adjlist.addEdge(2,3);
adjlist.addEdge(3,5);
adjlist.addEdge(1,4);
adjlist.addEdge(4,2);
adjlist.addEdge(5,2);
adjlist.printGraph();
adjlist.adjMatrix();
