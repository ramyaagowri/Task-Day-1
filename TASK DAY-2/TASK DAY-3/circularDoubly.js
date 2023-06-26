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
    if(this.head!=null)
    {
        let temp=this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=newnode;
        newnode.prev=temp;
        this.tail=newnode;
        // this.head.next=newnode;
        // newnode=this.head;

    }
    else{
        this.head=newnode;
        newnode.prev=head;
    }
    }
    displayReverse(){
        let temp=this.tail;
        while(temp)
        {
            console.log(temp.data);
            temp=temp.prev;
        }
    }
     
}
let c_list=new CircularDoubly;
c_list.append(10);
c_list.append(20);
c_list.append(30);
c_list.displayReverse();