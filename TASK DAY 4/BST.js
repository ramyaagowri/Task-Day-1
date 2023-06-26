class Node{
    constructor(data){
        this.data=data;
        this.right=null;
        this.left=null;
    }
}
class Tree{
    constructor(){
        this.root=null;
        this.sum = +0;
    
    }

    insert(data){
        let newNode=new Node(data);
        if(this.root==null)
        {
            this.root=newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }
        
    insertNode(node, newNode)
    {
        
        if(newNode.data < node.data)
        {
            
            if(node.left === null)
                node.left = newNode;
            else
        
                
                this.insertNode(node.left, newNode);
        }
        
        
        else
        {
            
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }
    
    getRoot(){
        return this.root;
    }

    printSum() {
        this.inorder(this.root);
        console.log(this.sum);
    }

    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            // console.log(node.data);
            if(node.left==null && node.right==null) {
                this.sum += node.data;
            }
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node == null)
            return;
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    postorder(node) {
        if (node == null)
        return;
        
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
       
    }
    
    // del(data){
    //    let temp =this.root
    //     this.deletenode(temp,data);
    // }
    // deletenode(temp,data){
    //     if(temp==null){
    //         return temp;
    //     }
    //     if(data>temp.data){
    //     temp.right=this.deletenode(temp.right,data)
    //     }
    //     else if(data<temp.data){
    //     temp.left=this.deletenode(temp.left,data);
    //     }
    //     else
    //     {
    //     if(temp.right==null)
    //     {
    //         temp.left=null;
    //     }
    //     else if(temp.left==null){
    //            temp.right=null;
    //     }
       
    //     temp.data=this.min(temp.right);
    //     temp.right=this.deletenode(temp.right,temp.data)
       
          
    //     }
           
    // }
     min(root)
        {
             while(root)
             {
                return min(root.left);
             }
             return root;
         }
        
	
	height(root) {
		if (root == null)
			{return 0;}
		else {
			
			var lheight = this.height(root.left);
			var rheight = this.height(root.right);

			
			if (lheight > rheight)
				{return (lheight + 1);}
			else
				{return (rheight + 1);}
        }
    }
		
    

	
	printCurrentLevel(root , level) {
		if (root == null)
            return;
		if (level == 1)
			 console.log(root.data + " ");
            if(root.left==null&&root.right==null)
            {
                this.sum+=root.data;
            }
             
	    else if (level > 1) {
			this.printCurrentLevel(root.left, level - 1);
            this.printCurrentLevel(root.right, level - 1);
               if(root.left==null&&root.right==null)
            {
                this.sum+=root.data;
            }
          
		}
        console.log(this.sum);
    }


    printLevelOrder() {
		var h = this.height(this.root);
		var i;
		for (i = 1; i <= h; i++)
			this.printCurrentLevel(root, i);
          
    }
    findAnchester(root,data1,data2){
        let temp=this.root;
        if(temp.data>data1)
        {
          console.log(this.inorderLeft(temp.left,data1,data2));
        }
        else{
            console.log(this.inorderRight(temp.right,data1,data2));
        }
}
}

let bstTree=new Tree;
bstTree.insert(50);
bstTree.insert(30);
bstTree.insert(70);
bstTree.insert(20);
bstTree.insert(40);
bstTree.insert(60);
bstTree.insert(90);
bstTree.insert(10);
bstTree.insert(80);
let root=bstTree.getRoot();
bstTree.printSum();
//bstTree.findAnchester(1,3);

//bstTree.postorder(root);
bstTree.del(40);
//bstTree.printLevelOrder();
bstTree.preorder(root);
/*

class Node {
		constructor(val) {
			this.data = val;
			this.left = null;
			this.right = null;
		}
	}


	class BSTtree{  

    constructor(){
	var root= null;
    }
	

	printLevelOrder() {
		var h = height(root);
		var i;
		for (i = 1; i <= h; i++)
			printCurrentLevel(root, i);
	}

	
	height(root) {
		if (root == null)
			return 0;
		else {
			
			var lheight = height(root.left);
			var rheight = height(root.right);

			
			if (lheight > rheight)
				return (lheight + 1);
			else
				return (rheight + 1);
		}
	}

	
	printCurrentLevel(root , level) {
		if (root == null)
			return;
		if (level == 1)
			console.log(root.data + " ");
		else if (level > 1) {
			printCurrentLevel(root.left, level - 1);
			printCurrentLevel(root.right, level - 1);
		}
	}


}
// root = new Node(1);
// 		root.left = new Node(2);
// 		root.right = new Node(3);
// 		root.left.left = new Node(4);
// 		root.left.right = new Node(5);*/