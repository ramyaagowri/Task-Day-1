// class Node
// {
//     constructor(data)
//     {
//         this.data=data;
//         this.next=null;
//     }
// }
// class SinglyList
// {
//     constructor()
//     {
//         this.head=null;
//     }
//     // Appending data to the singly linkedList
//     append(data)
//     {
//         let newnode=new Node(data);
//         if(this.head==null)
//         {
//             this.head=newnode;
//         }
//         else
//         {
//            let curr=this.head;
//            while(curr.next)
//            {
//             curr=curr.next;
//            }
//            curr.next=newnode;
//         }
//     }
//     //Replacing the given element at given position
//     replaceAt(data,pos)
//     {
//         let newnode=new Node(data);
//         let p=0;
//         let curr=this.head;
//         while(curr.next)
//         {
//             if(p==pos)
//             {
//                newnode.next=curr.next.next;
//                curr.next=newnode;
//                break;
//                //p++;
//             }
//             else{
//                curr=curr.next;
//                p++;
//             }

//         }
//     }
//     //inserting given element after the given position
//     insertAfter(data,pos)
//     {
//         let newnode=new Node(data);
//         let p=0;
//         let curr=this.head;
//         while(curr.next)
//         {
//             if(p==pos)
//             {
//                newnode.next=curr.next;
//                curr.next=newnode;
//                break;
//                //p++;
//             }
//             else{
//                curr=curr.next;
//                p++;
//             }

//         }
//     }
//     //Deleting element at given position
//     deleteAt(pos)
//     { let p=1;
//         let temp1=this.head;
//         let temp2=this.head.next;
//         while(temp2)
//         {
//            if(p==pos)
//            {
//             temp1.next=temp2.next;
//             temp2.next=null;
//             break;
//            }
//            else
//            {
//             temp1=temp1.next;
//             temp2=temp2.next;
//             p++;
//            }
//         }
//     }
//     //Remove duplicates for the singlu linked list
//     removeDuplicates()
//     {
//         let temp1=this.head;
//         let temp2=this.head;
//         while(temp1.next && temp1)
//         {
//             temp2=temp1;
//             while(temp2.next)
//             {
//                 if(temp1.data==temp2.next.data)
//                 {
//                     temp1.next=temp2.next.next;
//                     //break;
//                   // temp1.next=null;
//                 }
//                 else{
//                     temp2=temp2.next;
//                 }
//             }
//             temp1=temp1.next;
//         }
//     }
//     //printing the linkedList
//     print()
//     {
//         let curr=this.head;
//         while(curr)
//         {
//             console.log(curr.data);
//             curr=curr.next;
//         }
        
//     }
// }
// let mylist=new SinglyList;
// mylist.append(10);
// mylist.append(20);
// mylist.append(30);
// mylist.append(40);
// mylist.append(30);
// //mylist.insertAfter(40,1);
// //mylist.deleteAt(4);
// mylist.removeDuplicates();
// mylist.print();


