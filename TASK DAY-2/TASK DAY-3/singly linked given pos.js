// let head;
// var inp=require("readline-sync");

 

class Node
{
    constructor(d)
    {
            this.data = d;
            this.next = null;
    }

}
class LinkedList
{
    // constructor(){
    //     this.head=null;
    // }
    insertAfter(node ,data)
{
    if (node == null)
    {
        return;
    }
 
    let new_node = new Node(data);
 
    
    new_node.next = node.next;
 
    node.next = new_node;

}
prepend(data){
    let new_node = new Node(data);
 
            if(this.head!=null){
            
            new_node.next=this.head;
            this.head=new_node;
            
            }
            else{
                this.head=new_node;
                
            }
}
remove_duplicates() {
    let temp1 = null, temp2= null, dup = null;
    temp1 = this.head;

    
    while (temp1 != null && temp1.next != null) {
        temp2 = temp1;

    
        while (temp2.next != null) {

            if (temp1.data == temp2.next.data) {

                dup = temp2.next;
                console.log("The duplicate element is "+ dup.data);
                temp2.next = temp2.next.next;

            } else  {
                temp2 = temp2.next;
            }
        }
        temp1 = temp1.next;
    }
}
print(){
            let curr=this.head;
            while(curr){
                console.log(curr.data);
                curr=curr.next;
            }
        }

        insert(pos,val){
            let p=0;
            let curr=this.head;
            while(curr){
                if(p==pos)
                {
                    this.insertAfter(curr,val);
                    return ;
                }
                curr=curr.next;
                p++;
            }
        }
            mergingList(list1,pos){
                let temp=this.head;
                let temp1=list1.head;
              for(let i=0;i<pos-1;i++)
                {
                 temp=temp.next;

                }
                
                while(temp1.next!=null)
                {
                    temp1=temp1.next;
                }
                temp1.next=temp.next;
                temp.next=list1.head;

             }
            }
        
let list=new LinkedList;
list.prepend(10);
list.prepend(20);
list.prepend(30);

//list.search(0,40);

let list1=new LinkedList;
list1.prepend(30);
list1.prepend(20);
list1.prepend(60);
list.mergingList(list1,3);
list.remove_duplicates();
list.print();

