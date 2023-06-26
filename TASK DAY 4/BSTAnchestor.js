class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
    class BST{
constructor(){
    this.root=null;
}
    
// 	findAnchestor(data1, data2)
// 	{
// 		return this.findAnchestor(root, data1, data2);
// 	}
// 	findAnchestor(node, data1, data2)
// 	{
		
// 		if (node == null)
// 			return null;
// 		if (node.data == data1 || node.data == data2)
// 			return node;

		
// 		let leftAn = this.findAnchestor(node.left,data1, data2);
// 		let rightAn = this.findAnchestor(node.right, data1, data2);

		
// 		if (leftAn!=null && rightAn!=null)
// 			return node;

		
// 		return (leftAn != null) ? leftAn : rightAn;
// 	}
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
//     inorder(node)
//     {
//         if(node !== null)
//         {
//             this.inorder(node.left);
//              console.log(node.data);
//             // if(node.left==null && node.right==null) {
//             //     this.sum += node.data;
//             // }
//             this.inorder(node.right);
//         }
//     }
// }
// let Tree=new BST;
// Tree.insert(10);
// Tree.insert(20);
// Tree.insert(70);
// Tree.insert(90);
// Tree.insert(50);
// Tree.insert(60);
// Tree.inorder(this.root);



CA(val1,val2){
    if(this.root == null){
        console.log("No Value");
    }else
this.commonAncestor(this.root,val1,val2);
}
commonAncestor(root,val1,val2){
    if(val1 > root.data && val2 < root.data || val2 > root.data && val1 < root.data){
        console.log(root.data);
    }
    if(val1 > root.data && val2 > root.data ){    
        this.commonAncestor(root.right,val1,val2);    
    }
    if(val1 < root.data && val2 < root.data ){    
        this.commonAncestor(root.left,val1,val2);    
    }
}
    }
    let Tree=new BST;
    Tree.insert(10);
    Tree.insert(30);
    Tree.insert(20);
    Tree.insert(70);
    Tree.insert(40);
    Tree.insert(50);
    Tree.CA(20,70);

	