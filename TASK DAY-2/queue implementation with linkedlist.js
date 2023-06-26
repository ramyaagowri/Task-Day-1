class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class QueueLinkedList{
    constructor(){
        this.head=null;
    }
    enqueue(data){
        let newnode=new Node(data);
        if(this.head!=null)
        {
            let temp=this.head;
            while(temp.next!=null)
            {
                temp=temp.next;
            }
            temp.next=newnode;
        }
        else{
            this.head=newnode;
        }
    }
        dequeue(){
            if(this.head!=null)
            {
            this.head=this.head.next;}
            else{
                console.log("the Queue is Empty");
            }

        }
        peek(){
            console.log(this.head.data);
        }
        display(){
            let temp=this.head;
            while(temp){
                console.log(temp.data);
                temp=temp.next;
            }
        }
}
let queue=new QueueLinkedList;
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
queue.peek();
queue.display();
