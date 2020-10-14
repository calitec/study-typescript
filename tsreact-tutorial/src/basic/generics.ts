// 제네릭은 값의 타입이 정해지지 않았을때 any는 사용하기 싫을때 타입을 지켜내고 싶을때 사용한다 (다이나믹).

function merge1 ( a: any, b: any ) {
  return {
    ...a,
    ...b
  }
}
const merged1 = merge1({ foo: 1 }, { bar: 2});
// merged1


function merge2<T1, T2> ( a: T1, b: T2 ) {
  return {
    ...a,
    ...b
  }
}
const merged2 = merge2({ foo: 1 }, { bar: 2});
// merged2


function wrap<T>( param: T ) {
  return {
    param
  };
}
const wrapped = wrap('aaa');
// wrapped



// interface 방식
interface Items<T> {
  list: T[]
};
const items: Items<string> = {
  list: ['a','b','c']
};


// type alis 방식
type Items1<T> = {
  list: T[]
};
const items1: Items1<string> = {
  list: ['a','b','c']
};

type Items2<T, V> = {
  list: T[];
  value: V
};
const items2: Items2<number, string> = {
  list: [1, 2, 3],
  value: 'aaa',
};


class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while ( queue.length > 0 ) {
  console.log(queue.dequeue());
}