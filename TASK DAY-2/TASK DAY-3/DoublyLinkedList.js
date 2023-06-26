
class Node {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class Doublylist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    let node = new Node(val);
    let temp = this.head;
    if (this.head == null) 
    {
      this.head = node;
    } 
    else 
    {
      while (temp.next != null) 
      {
        temp = temp.next;
      }
      temp.next = node;
      node.prev = temp;
    }
    this.tail = node;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  print() {
    let temp = this.tail;
    while (temp) {
      console.log(temp.val);
      temp = temp.prev;
    }
  }
}

let list = new Doublylist();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print();
list.print();
