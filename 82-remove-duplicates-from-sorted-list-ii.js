/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null;
  let resultHead = head;
  let cursor = head;
  let curr = head;
  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      let uniq = findUniqNode(curr.next.next, curr.val);
      if (resultHead.val === curr.val) resultHead = uniq;
      curr = uniq;
      cursor.next = uniq;
    } else {
      cursor = curr;
      curr = curr.next;
    }
  }
  return resultHead || null;
};

function findUniqNode(head, val) {
  let curr = head;
  let result;
  while (curr) {
    if (curr.val === val) curr = curr.next;
    else return curr;
  }
}

function ListNode(val) {
  return { val, next: null };
}
function toString(node) {
  let curr = node;
  let str = "";
  while (curr) {
    str += curr.val;
    if (curr.next) {
      str += "->";
    }
    curr = curr.next;
  }
  return str;
}
let a;

// 1->2->3->3->4->4->5
let n1 = ListNode(1);
let n1_2 = ListNode(1);
let n1_3 = ListNode(1);
let n2 = ListNode(2);
let n3 = ListNode(3);
let n3_2 = ListNode(3);
let n4 = ListNode(4);
let n4_2 = ListNode(4);
let n5 = ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n3_2;
n3_2.next = n4;
n4.next = n4_2;
n4_2.next = n5;
a = deleteDuplicates(n1);
console.log(toString(a)); // 1->2->5

// 1->1->1->2->3
n1.next = n1_2;
n1_2.next = n1_3;
n1_3.next = n2;
n2.next = n3;
n3.next = null;
a = deleteDuplicates(n1);
console.log(toString(a)); // 2->3

// 1->1
n1.next = n1_2;
n1_2.next = null;
a = deleteDuplicates(n1);
console.log(toString(a));
