// practice1.
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor ( public radius: number ) {
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  };
}
// class Circle implements Shape {
//   radius: number;
//   constructor ( radius: number ) {
//     this.radius = radius;
//   }
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   };
// }

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor ( width: number, height: number ) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

}

const circle: Circle = new Circle(5);

const rectangle: Rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
  console.log(shape.getArea());
});




// practice2

interface Person { //interface 방식: 라이브러리를 사용할땐 인터페이스를 사용. 무엇을 사용하든 일관성 있게.
  name: string;
  age?: number;
}
// type Person = { //type alis 방식
//   name: string;
//   age?: number;
// }

interface Developer extends Person { //interface 방식
  // extends로 상속가능
  // name: string;
  // age?: number;
  skills: string[];
}
// type Developer = Person & { //type alis 방식
//   skills: string[];
// }

const person: Person = {
  name: '김사람',
  // skills: ['javascript']
}

const expert: Developer = {
  name: '김개발',
  skills: ['javascript']
}


// type alis만 가능한 다양한 방식
type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';