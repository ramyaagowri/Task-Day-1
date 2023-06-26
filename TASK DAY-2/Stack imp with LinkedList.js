var head;
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class StackLinkedList{
    constructor(){
        this.head=null;
    }
    // push(data){
    //     let newnode=new Node(data);
    //     if(this.head==null)
    //     {
    //    this.head=newnode;
    //     }
    //     else{
    //         let curr=this.head;
    //         while(curr.next!=null){
    //             curr=curr.next;
    //         }
    //         curr.next=newnode;
    //     }

    push(data){
                let node=new Node(data);
                if(this.head!=null){
                
                node.next=this.head;
                this.head=node;
              
                }
                else{
                    this.head=node;
                    
                }
            }

    pop(){
            if(this.head!=null){
       this.head=this.head.next;
      }
      else{
          console.log("the stack is empty");
      }
    }
    peek(){
        let temp=this.head;
        console.log(temp.data);
    }
    display(){
        let temp=this.head;
       
        while(temp)
        {
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
let list=new StackLinkedList;
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.pop()
list.peek();
list.display();

