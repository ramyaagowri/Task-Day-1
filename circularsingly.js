class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularsinglyList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      let node = new Node(data);
      let temp = this.head;
      if (this.head == null) {
        this.head = node;
        node.next = this.head;
      } else {
        while (temp.next != this.head) {
          temp = temp.next;
        }
        temp.next = node;
        node.next = this.head;
      }
    }
  
    print() {
      let temp = this.head;
      do {
        console.log(temp.data);
        temp = temp.next;
      } while (temp != this.head && temp != null);
    }
  }
  
  let list = new CircularsinglyList();
  list.append(10);
  list.append(30);
  list.append(40);
  list.append(60);
 
  list.print();
  