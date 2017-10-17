enum Numbers {
    First  = 1,
    Second = 2,
    Third = 1002,
    Fourth = 1001,
    Fifth // 1002!
}

let temp = Numbers.First + Numbers.Second

console.log(temp === Numbers.Third)