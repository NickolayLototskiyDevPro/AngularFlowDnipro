type SuperString = string | number;
namespace A {
    export namespace B {
        export namespace C {
            export class S {

            }
        }
    }
}

type S = A.B.C.S;
const tt: S = new A.B.C.S();