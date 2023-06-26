//insert at given pos
//delete at given pos
//insert at beginning *
//delete at the end
//get user input
/*var head;
class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
class cirularDoublyLinkedList{
        constructor(){
            this.head=null;
            this.tail=null;
            this.size=0;
        }
        insertAtBeginning(data){
            let newnode=new Node(data);
            if(this.head==null)
            {
                this.head=newnode;
                this.tail=newnode;
                this.size++;
               //newnode.next=this.head;
            }
            else if(this.head.next==this.head)
            {
                this.head.prev=newnode;
                newnode.next=this.head;
                this.head.next=newnode;
                newnode.prev=this.head;
                this.size++;
                
            }
            else
            {
                newnode.next=this.head;
                this.head.prev=newnode;
                this.head=newnode;
                this.head.prev=this.tail;
                this.tail.next=this.head;
                this.size++;
            }
           
                
           

        }
        deleteAtEnd(){
            if(this.head.next==this.head)
            {
                this.head=null;
                this.tail=null;
                this.size--;
               //newnode.next=this.head;
            }
            else{
                let temp=this.tail.prev;
                temp.next=this.head;
                this.head.prev=temp;
                this.tail=temp;
                this.size--;
            }
        }
        displayforward(){
            let R=1;
            let temp=this.head;
            while(temp!=this.head||R==1)
            {
                R=0;
                console.log(temp.data);
                temp=temp.next;
            }
            console.log(this.size);
        
        }
        updateValueAtGivenPosition(pos,data)
        {
           this.pos=pos;
           
           let newnode=new Node(data);
           let temp=this.head;
           while(temp==pos)
           {
            //console.log(temp.data);
            temp=temp.next;
           }
           newnode.next=temp.next.next;
           temp.next=newnode;
           newnode.prev=temp;
           temp.next.next.prev=newnode;
        }
        insertAtGivenPosition(pos,data)
        {
           
        }
        deleteAtGivenPosition(pos){
            this.pos=pos;
            if(this.head.next==this.head)
            {
                this.head=null;
                this.tail=null;
                this.size--;
               //newnode.next=this.head;
            }
            else{
              let temp=this.head;
            let temp1=this.head;
              for(let i=1;i<=pos-1;i++)
              {
                temp=temp.next;
                temp1=temp.next;
              }
              temp.next=temp1;
              temp1.prev=temp;

            }

        }
}
let list=new cirularDoublyLinkedList;
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtBeginning(40);
list.insertAtBeginning(50);
list.insertAtBeginning(60);

//list.updateValueAtGivenPosition(3,40);

//list.insertAtGivenPosition(2,50);

list.deleteAtGivenPosition(3);
list.displayforward();
*/
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
        //this.size=0;
    }
    InsertAtBegin(data)
    {
        let newnode=new Node(data);
        if (this.head==null){
            this.head=newnode;
            this.tail=newnode;
            //newnode.next=this.head;
            //this.size++;
        }
        else if(this.head.next==this.head){
            this.head.prev=newnode;
            newnode.next=this.head;
            this.head.next=newnode;
            newnode.prev=this.head;
            //this.size++;
        }
        else{
            newnode.next=this.head;
            this.head.prev=newnode;
            this.head=newnode;
            this.head.prev=this.tail;
            this.tail.next=this.head;
            //this.size++;
        }
    }
    InsertPos(data,position){
        let newnode=new Node(data);
        // if(position==1){
        // if (this.head==null){
        //     this.head=newnode;
        //     this.tail=newnode;
        //     //newnode.next=this.head;
        //     this.size++;
        // }
        // else if(this.head.next==this.head){
        //     this.head.prev=newnode;
        //     newnode.next=this.head;
        //     this.head.next=newnode;
        //     newnode.prev=this.head;
        //     this.size++;
        // }
        // else{
        //     newnode.next=this.head;
        //     this.head.prev=newnode;
        //     this.head=newnode;
        //     this.head.prev=this.tail;
        //     this.tail.next=this.head;
        //     this.size++;
        // }
        // }
        let temp1=this.head;
        let temp2=this.head;
        for(let i=0;i<position-1;i++){
            temp1=temp1.next;
            temp2=temp1.next;
        }
        newnode.prev=temp1;
        temp1.next=newnode;
        newnode.next=temp2;
        temp2.prev=newnode;

    }
    DeletePos(position){
        if(this.head.next==this.head){
            this.head=null;
            this.tail=null;
        }
        else{
            let temp=this.head;
            //let temp2=this.head;
        for(let i=1;i<position-1;i++){
            temp=temp.next;
           // temp2=temp1.next;
        }
        temp.next=temp.next.next;

        temp.next.prev=temp;
        }
    }

    DeleteAtEnd(){
        if(this.head.next==this.head){
            this.head=null;
            this.tail=null;
            //this.size=0;
        }
        else{
            let temp=this.tail.prev;
            temp.next=this.head;
            this.head.prev=temp;
            this.tail=temp;
            //this.size--;
        }
    }

    display(){
        let temp = this.head;
       let r=1;
        while(temp!=this.head|| r==1)
        {
            r=0;
            console.log(temp.data);
            temp=temp.next;
        }
        //console.log(this.size);
    }
       
    
}
let list=new CircularDoubly;
list.InsertAtBegin(1);
list.InsertAtBegin(2);
list.InsertAtBegin(3);
list.InsertAtBegin(4);
list.InsertAtBegin(5);
list.InsertPos(6,3);
list.display();
console.log("----------------");
list.DeletePos(2);
list.display();
//list.DeleteAtEnd();
//list.display();







