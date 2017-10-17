let ff = function(arg1:string, arg2:number): string {
    return arg1 + arg2.toString();
}

ff('1',2) // Accepted
//ff(1, '2') // Not Accepted
//ff() // Not Accepted

function zz():void;
function zz(param1: string): void;
function zz(param1: number): void;

function zz(param1?: string | number):void {
   console.log(param1);
};

