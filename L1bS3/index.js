// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   hello() {
//     console.log(`${this.name} say hello`);
//   }
//   add(a, b) {
//     console.log(`${this.name} is calculating ${a} and ${b} equals`, a + b);
//   }
// }

// class Student extends Human {
//   constructor(name, age, classRoom) {
//     super(name, age);
//     this.classRoom = classRoom;
//   }
//   run() {
//     console.log(`${this.name} is running`);
//   }
//   hi() {
//     let h = super.hello();
//     console.log(h, this.classRoom);
//   }
// }

// let Thien = new Human("Thien", 15);
// let Long = new Human("Long", 15);
// let Khoi = new Human("Khoi", 15);
// let Thien = new Student("Thien", 15, 4);
// Thien.run();

// Khoi.add(1, 2);
// Thien.hello();
// console.log(Long);
// console.log(Khoi);
// class Button {
//   constructor(text, color) {
//     this.text = text;
//     this.color = color;
//   }
//   render() {
//     return `<button style="background-color: ${this.color}" >${this.text}</button>`;
//   }
// }

// let sample = new Button("Click me", "red");
// let btnShow = new Button("Show", "green");
// let Container = document.getElementById("btnContainer");

// Container.innerHTML += `${sample.render()}`;
// Container.innerHTML = `${btnShow.render()}`;

// class TextColor extends Button {
//   constructor(text, color, textcolor) {
//     super(text, color);
//     this.textcolor = textcolor;
//   }
//   render() {
//     let render = super.render();
//     return `<button style="${render}; color:${this.textcolor}">${render}</button>`;
//   }
// }

// let sample2 = new TextColor("click me", "red", "white");
// Container.innerHTML += `${sample2.render()}`;

// class Form {
//   constructor(name, type, requirement) {
//     this.name = name;
//     this.type = type;
//     this.requirement = requirement;
//   }
//   render() {
//     return `<div class="row g-3 align-items-center">
//     <div class="col-auto">
//       <label for="inputPassword6" class="col-form-label">${this.name}</label>
//     </div>
//     <div class="col-auto">
//       <input type="${this.type}" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
//     </div>
//     <div class="col-auto">
//       <span id="passwordHelpInline" class="form-text">
//         ${this.requirement}
//       </span>
//     </div>
//   </div>`;
//   }
// }
// let PasswordForm = new Form(
//   "Password",
//   "password",
//   "Password must be at least 8-20 characters"
// );
// document.body.innerHTML += PasswordForm.render();
