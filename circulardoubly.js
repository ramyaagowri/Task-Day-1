var head;
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class CircularDoubly{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(data){
       let newnode=new Node(data);
       if(this.head!=null){
        let R=1;
        let temp=this.head;
        while(temp.next!=this.head||R==1)
        {
            R=0;
            temp=temp.next;
        }
        temp.next=newnode;
        newnode.prev=temp;
        this.head.prev=newnode;
        newnode.next=this.head;
        
       }
       else{
        this.head=newnode;
        newnode.next=this.head;

       }
    }
}
//       var head;
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// }
// class CircularDoubly{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
//     append(data){
//        let newnode=new Node(data);
//        if(this.head!=null){
//         let R=1;
//         let temp=this.head;
//         while(temp.next!=this.head||R==1)
//         {
//             R=0;
//             temp=temp.next;
//         }
//         temp.next=newnode;
//         newnode.prev=temp;
//         this.head.prev=newnode;
//         newnode.next=this.head;
        
//        }
//        else{
//         this.head=newnode;
//         newnode.next=this.head;

//        }
//     }
//        displayforward(){
//         let R=1;
//         let temp=this.head;
//         while(temp!=this.head||R==1)
//         {
//             R=0;
//             console.log(temp.data);
//             temp=temp.next;
//         }
    
        
       
    
//     }
// }

// let list=new  CircularDoubly;
// list.append(10);list.append(20);list.append(30);
// list.displayforward();
    
        
       
    
//     }
// }

// let list=new  CircularDoubly;
// list.append(10);list.append(20);list.append(30);
// list.displayforward();