const params = new URLSearchParams(window.location.search);
const userId = params.get("id");
const url = `https://api.airtable.com/v0/appcJCnPywJw3X3DQ/user-db/${userId}`;



let curLevel = parseInt(params.get("l"))
let a = parseInt(params.get("a"))
let w = parseInt(params.get("w"))
let r = a-w


var quesAns
const levelArre = [[C1_A, 'Basics of Counting L001: Find the missing number'], 
[C1_B, "Basics of Counting: What number comes after"],
[C1_C, 'Basics of Counting: What number comes before'], 
[C1_D, 'Basics of Counting1: What number comes in-between'], 
[C1_E, 'Basics of Counting: Which number is greater'],
[A1_A, 'Basic Arithmetic: Sum is always less than or equal to 10'],
[A1_B, 'Basic Arithmetic: Single digit addition where sum is greater than 10.'],
[S1_A, 'Basic Arithmetic: Single digit subtraction where  difference is always less than 6.'],
[S1_B, 'Basic Arithmetic:Subtraction of two single digit numbers where difference is always greater than 5.'], 
[C2_A, 'Counting Intermediate: Find the missing number (120-999)'], 
[C2_B, "Counting Intermediate: What number comes after (120-999)"],
[C2_C, 'Counting Intermediate: What number comes before (120-999)'], 
[C2_D, 'Counting Intermediate: What number comes in-between (120-999)'], 
[C2_E, 'Counting Intermediate: Which number is greater (120-999)'],
[A2_a, 'Intermediate Arithmetic: Two digit number added to a single digit number (no carry)'], 
[A2_b, 'Intermediate Arithmetic: Two digit addition (no carry)'], 
[S2_A, 'Intermediate Arithmetic: One digit number subtracted from a two digit number (no borrowing)'],
[S2_B, 'Intermediate Arithmetic: Two digit subtraction (no borrowing)'], 
[A3_A, 'Three digit addition (with one carry)'], 
[A3_B, 'Three digit addition (with multiple carry)'], 
[S3_A, 'Three digit subtraction (with one borrowing)'],
[S3_B, 'Three digit subtraction (with multiple borrowing)'],
[M1_A, 'Multiplication of two numbers where one is 0'],
[M1_B, 'Multiplication of two numbers where one is 1'],
[M1_C, 'Multiplication of two single digit numbers from the table of 2'],
[M1_D, 'Multiplication of two single digit numbers from the table of 4'],
[M1_E, 'Multiplication of two single digit numbers from the table of 3'],
[M1_F, 'Multiplication of two single digit numbers from the table of 6'],
[M1_G, 'Multiplication of two single digit numbers from the table of 5'],
[M1_H, 'Multiplication of two single digit numbers from the table of 10'],
[M1_i, 'Multiplication of two single digit numbers from the table of 7'],
[M1_j, 'Multiplication of two single digit numbers from the table of 8'],
[M1_k, 'Multiplication of two single digit numbers from the table of 9'], //32
[D1_a, 'Divide a number by 1 (no remainder) where answer doesn’t exceed 10.'],
[D1_b, 'Divide a number by 2 (no remainder) where answer doesn’t exceed 10.'],
[D1_c, 'Divide a number by 4 (no remainder) where answer doesn’t exceed 10.'],
[D1_d, 'Divide a number by 3 (no remainder) where answer doesn’t exceed 10.'],
[D1_e, 'Divide a number by 6 (no remainder) where answer doesn’t exceed 10.'], //37
[D1_f, 'Divide a number by 5 (no remainder) where answer doesn’t exceed 10.'],
[D1_g, 'Divide a number by 10 (no remainder) where answer doesn’t exceed 10.'],
[D1_h, 'Divide a number by 7 (no remainder) where answer doesn’t exceed 10.'],
[D1_i, 'Divide a number by 8 (no remainder) where answer doesn’t exceed 10.'],
[D1_j, 'Divide a number by 9 (no remainder) where answer doesn’t exceed 10.'], //42
[M2_a, 'Multiplication of two two digit numbers (no multiplicative carry).'],
[M2_b, 'Multiplication of a  two digit number with a single digit number (with multiplicative carry).'],
[M2_c, 'Multiplication of two two digit numbers (with multiplicative carry).'],
[M2_d, 'Multiplication of two three digit numbers (with multiplicative carry).'],
[D2_a, 'Division of two single digit numbers (with remainder).'], //47
[D2_b, 'Division of a two digit number by a single digit number (no remainder).'], //Level 48
[D2_c, 'Division of a two digit number by a single digit number (with remainder).'], //49
[D2_d, 'Division of a multi digit number with a single digit number (with remainder).']] //50




let firstPass = false
var failCoin = false
let practicetoken = false
let secondGaptestVar = false
let PracticeNos = 10
let minMark =  Math.floor(PracticeNos*80/100)


function myFunction() {
var x = Number(document.getElementById("userAns").value)
answerCompare(x)

}

function testingComments() {
    if (firstPass === true) {
    document.getElementById("attempts").innerHTML = `Total attempts: ${a} Correct attempts: ${r} Wrong attempts: ${w}`
    document.getElementById("Skoobon prototype 2020").innerHTML = `Get 8 out of 10 or 4 out of 5 to level up`
    document.getElementById("Currently_testing").innerHTML = `Currently mastering ${levelArre[curLevel][1]}`
    } else {
        document.getElementById("attempts").innerHTML = `Total attempts: ${a} Correct attempts: ${r} Wrong attempts: ${w}`
        document.getElementById("Currently_testing").innerHTML = `Currently testing ${levelArre[curLevel][1]}`
        document.getElementById("Skoobon prototype 2020").innerHTML = `Get 8 out of 10 or 4 out of 5 to level up`
    }
}
function finallevelComments() {
    document.getElementById("attempts").innerHTML = ``
    document.getElementById("Currently_testing").innerHTML = ``
    document.getElementById("Skoobon prototype 2020").innerHTML = "Math so good, we count on you! Skoobon2021"
}



function levelUp() {
    firstPass = true
    curLevel += 1
    document.getElementById("feedback").innerHTML = "Keep moving forward"
    document.getElementById("attempts").innerHTML = `You leveled up, great!`
    document.getElementById("Currently_testing").innerHTML = `Next we will master ${levelArre[curLevel][1]}`
    questionPasser(levelArre[curLevel][0])
    a = 0
    w = 0
    r = 0
}


function C1_A() { //Find the missing number
        let a1 = Math.floor(Math.random() * (121 - 4) + 4)
        let random1 = Math.floor(Math.random() * 3)
        if (random1 === 0){
            quesAns = [`Find the missing number ${a1-4}, ${a1-2}, ${a1-1}, ${a1}?`, a1-3]
        }
        else if (random1 === 1){
            quesAns = [`Find the missing number ${a1-4}, ${a1-3}, ${a1-1}, ${a1}?`, a1-2]
        }
        else if (random1 === 2){
            quesAns = [`Find the missing number ${a1-4}, ${a1-3}, ${a1-2}, ${a1}?`, a1-1]
        }
        return quesAns
    }

function C1_B() { //What number comes after
    let a1 = Math.floor(Math.random()*120)
    quesAns = [`What number comes after ${a1}?`, a1+1]
    return quesAns  
}
        
function C1_C() { //What number comes before 
        let a1 = Math.floor(Math.random()*120)
        quesAns = [`What number comes before ${a1}?`, a1-1]
        return quesAns
    }

function C1_D() {  //What number comes in-between
        let a1 = Math.floor(Math.random() * (121 - 2) + 2)
        quesAns = [`What number comes in-between ${a1-2} and ${a1}?`, a1-1]
        return quesAns
    }

function C1_E() { //Which number is greater
    let a1 = Math.floor(Math.random() * 120)
    let a2 = Math.floor(Math.random() * 120)
    if (a1 === a2) {
        a1 = Math.floor(Math.random() * 7)
        }
    if (a1 >= a2) {
        quesAns = [`Which number is greater ${a1} or ${a2}?`, a1]
        }
    else{
        quesAns = [`Which number is greater ${a1} or ${a2}?`, a2]
        }
    return quesAns
}

    
function A1_A() { //Basic Addition 1: Sum is always less than or equal to 10
    let a1 = 1
    let a2 = 10
    while (a1 + a2 > 10) {
        a1 = Math.floor(Math.random()*10)
        a2 = Math.floor(Math.random()*10)
    }
    quesAns = [`Add the following: ${a1} + ${a2}?`, a1 + a2]
    return quesAns
}

function A1_B() { //Basic Addition 2: Single digit addition where sum is greater than 10.
    let a1 = 0
    let a2 = 10
    while (a1 + a2 < 11) {
        a1 = Math.floor(Math.random()*10)
        a2 = Math.floor(Math.random()*10)
    }
    quesAns = [`Add the following: ${a1} + ${a2}`, a1 + a2]
    return quesAns
}

function S1_A() { //Basic Arithmetic 3: Single digit subtraction where  difference is always less than 6.
    let a1 = 1
    let a2 = 10
    while (a1 - a2 > 6 || a1 - a2 < 0) {
        a1 = Math.floor(Math.random()*10)
        a2 = Math.floor(Math.random()*10)
    }
    quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
    return quesAns
}

function S1_B() { //Basic Arithmetic 4: Subtraction of two single digit numbers where difference is always greater than 5..
    let a1 = 1
    let a2 = 10
    while (a1 - a2 < 6) {
        a1 = Math.floor(Math.random()*10)
        a2 = Math.floor(Math.random()*10)
    }
    quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
    return quesAns
}

function C2_A() { //Counting Intermediate Find the missing number(120-999)
    let a1 = Math.floor(Math.random() * (1000 - 125) + 125)
    let random1 = Math.floor(Math.random() * 3)
    if (random1 === 0){
        quesAns = [`Find the missing number ${a1-4}, ${a1-2}, ${a1-1}, ${a1}?`, a1-3]
    }
    else if (random1 === 1){
        quesAns = [`Find the missing number ${a1-4}, ${a1-3}, ${a1-1}, ${a1}?`, a1-2]
    }
    else if (random1 === 2){
        quesAns = [`Find the missing number ${a1-4}, ${a1-3}, ${a1-2}, ${a1}?`, a1-1]
    }
    return quesAns
}

function C2_B() { //Counting Intermediate What number comes after(120-999)
    let a1 = Math.floor(Math.random() * (1000 - 121) + 121)
    quesAns = [`What number comes after ${a1}?`, a1+1]
    return quesAns  
}
    
function C2_C() { //Counting Intermediate What number comes before(120-999)
    let a1 = Math.floor(Math.random()*(1000 - 121) + 121)
    quesAns = [`What number comes before ${a1}?`, a1-1]
    return quesAns
}

function C2_D() { //Counting Intermediate What number comes in-between(120-999)
    let a1 = Math.floor(Math.random() * (1000 - 123) + 123)
    quesAns = [`What number comes in-between ${a1-2} and ${a1}?`, a1-1]
    return quesAns
}

function C2_E() { //Counting Intermediate Which number is greater(120-999)
    let a1 = Math.floor(Math.random() * (1000 - 121) + 121)
    let a2 = Math.floor(Math.random() * (1000 - 121) + 121)
    if (a1 === a2) {
        a1 = Math.floor(Math.random() (161 - 121) + 121)
    }
    if (a1 >= a2) {
        quesAns = [`Which number is greater ${a1} or ${a2}?`, a1]
    }
    else{
        quesAns = [`Which number is greater ${a1} or ${a2}?`, a2]
    }
    return quesAns
}

function A2_a() { //Intermediate Arithmetic L007: Two digit number added to a single digit number (no carry).
    let a1 = 10
    let e1 = 9
    let a2 = 1
    while (e1 + a2 > 9) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
        let x1 = String(a1).charAt(1);
        e1 = Number(x1)
    }
    quesAns = [`Add the following: ${a1} + ${a2}`, a1 + a2]
    return quesAns
}

function A2_b() { //Intermediate Arithmetic L008: //Two digit addition (no carry).
    let a1 = 56
    let e1 = 6
    let a2 = 94
    let e2 = 4
    while (e1 + e2 > 9) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (100 - 10) + 10)
        let x1 = String(a1).charAt(1);
        e1 = Number(x1);
        let x2 = String(a2).charAt(1);
        e2 = Number(x2);
    }
    quesAns = [`Add the following: ${a1} + ${a2}`, a1 + a2]
    return quesAns
}

function S2_A() { //Intermediate Arithmetic L009: One digit number subtracted from a two digit number (no borrowing) 
    let a1 = 45
    let e1 = 5
    let a2 = 9
    while (e1 - a2 < 1) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (10 - 3) + 3)
        let x1 = String(a1).charAt(1);
        e1 = Number(x1);
    }
    quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
    return quesAns
}

function S2_B() { //Intermediate Arithmetic L010: Two digit subtraction (no borrowing)
    let a1 = 56
    let e1 = 6
    let a2 = 27
    let e2 = 7
    while (e1 - e2 < 1 || a1 <= a2) { 
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (100 - 10) + 10)
        let x1 = String(a1).charAt(1)
        e1 = Number(x1);
        let x2 = String(a2).charAt(1);
        e2 = Number(x2);
    }
    quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
    return quesAns
}

function A3_A() { //Three digit addition (with one carry)
    let a1 = 934
    let a1e1 = 3
    let a1e2 = 4
    let a2 = 624
    let a2e1 = 2
    let a2e2 = 4
    while ((a1e1 + a2e1 > 9 && a1e2 + a2e2 > 9) || (a1e1 + a2e1 < 10 && a1e2 + a2e2 < 10)) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (1000 - 100) + 100)
        let a1x1 = String(a1).charAt(1)
        a1e1 = Number(a1x1)
        let a1x2 = String(a1).charAt(2)
        a1e2 = Number(a1x2)
        let a2x1 = String(a2).charAt(1)
        a2e1 = Number(a2x1);
        let a2x2 = String(a2).charAt(2)
        a2e2 = Number(a2x2);
    }
        quesAns = [`Add the following: ${a1} + ${a2}`, a1 + a2]
        return quesAns
    }
    
function A3_B() { //Three digit addition (with multiple carry)

    let a1 = 934
    let a1e1 = 3
    let a1e2 = 4
    let a2 = 624
    let a2e1 = 2
    let a2e2 = 4
    while (a1e1 + a2e1 < 10 || a1e2 + a2e2 < 10) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (1000 - 100) + 100)
        let a1x1 = String(a1).charAt(1)
        a1e1 = Number(a1x1)
        let a1x2 = String(a1).charAt(2)
        a1e2 = Number(a1x2)
        let a2x1 = String(a2).charAt(1)
        a2e1 = Number(a2x1);
        let a2x2 = String(a2).charAt(2)
        a2e2 = Number(a2x2);
    }
        quesAns = [`Add the following: ${a1} + ${a2}`, a1 + a2]
        return quesAns
    }

function S3_A() { //Three digit subtraction (with one borrowing)
    let a1 = 934
    let a1e1 = 3
    let a1e2 = 4
    let a2 = 624
    let a2e1 = 2
    let a2e2 = 4
    while ((a1e1 - a2e1 >= 0 && a1e2 - a2e2 >= 0) || (a1e1 - a2e1 < 0 && a1e2 - a2e2 < 0) || (a1 < a2)) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (1000 - 100) + 100)
        let a1x1 = String(a1).charAt(1)
        a1e1 = Number(a1x1)
        let a1x2 = String(a1).charAt(2)
        a1e2 = Number(a1x2)
        let a2x1 = String(a2).charAt(1)
        a2e1 = Number(a2x1);
        let a2x2 = String(a2).charAt(2)
        a2e2 = Number(a2x2);
    }
        quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
        return quesAns
}

function S3_B() { //Three digit subtraction (with multiple borrowing)
    let a1 = 934
    let a1e1 = 3
    let a1e2 = 4
    let a2 = 624
    let a2e1 = 2
    let a2e2 = 4
    while ((a1e1 >= a2e1 || a1e2 >= a2e2) || (a1 < a2)) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (1000 - 100) + 100)
        let a1x1 = String(a1).charAt(1)
        a1e1 = Number(a1x1)
        let a1x2 = String(a1).charAt(2)
        a1e2 = Number(a1x2)
        let a2x1 = String(a2).charAt(1)
        a2e1 = Number(a2x1);
        let a2x2 = String(a2).charAt(2)
        a2e2 = Number(a2x2);
    }
        quesAns = [`Subtract the following: ${a1} - ${a2}`, a1 - a2]
        return quesAns
}

function M1_A() { //Multiplication of two numbers where one is 0
    let a1 = Math.floor(Math.random()* (100 - 2) + 2)
    let a2 = 0
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_B() { //Multiplication of two numbers where one 1
    let a1 = Math.floor(Math.random()* (100 - 1) + 1)
    let a2 = 1
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_C() { //Multiplication of two single digit numbers from the table of 2
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 2
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_D() { //Multiplication of two single digit numbers from the table of 4
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 4
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_E() { //Multiplication of two single digit numbers from the table of 3
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 3
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_F() { //Multiplication of two single digit numbers from the table of 6
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 6
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_G() { //Multiplication of a single digit number with 5
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 5
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_H() { //Multiplication of a single digit number with 10
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 10
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_i() { //Multiplication of a single digit number with 7
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 7
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_j() { //Multiplication of a single digit number with 8
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 8
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function M1_k() { //Multiplication of a single digit number with 9
    let a1 = Math.floor(Math.random()* (10 - 2) + 2)
    let a2 = 9
    quesAns = [`Multiply ${a2} X ${a1}`, a1*a2]
    return quesAns  
}

function D1_a() { //Divide a number by 1 (no remainder) where answer doesn’t exceed 10.
    let a1 = Math.floor(Math.random()* (100 - 1) + 1)
    let a2 = 1
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns  
}

function D1_b() { //Divide a number by 2 (no remainder) where answer doesn’t exceed 10.
    let a1 = 22
    let a2 = 2
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns  
}

function D1_c() { //Divide a number by 4 (no remainder) where answer doesn’t exceed 10.
    let a1 = 44
    let a2 = 4
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}


function D1_d() { //Divide a number by 3 (no remainder) where answer doesn’t exceed 10.
    let a1 = 33
    let a2 = 3
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_e() { //Divide a number by 6 (no remainder) where answer doesn’t exceed 10.
    let a1 = 67
    let a2 = 6
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_f() { //Divide a number by 5 (no remainder) where answer doesn’t exceed 10.
    let a1 =55
    let a2 = 5
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_g() { //Divide a number by 10 (no remainder) where answer doesn’t exceed 10.
    let a1 = 110
    let a2 = 10
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_h() { //Divide a number by 7 (no remainder) where answer doesn’t exceed 10.
    let a1 = 71
    let a2 = 7
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_i() { //Divide a number by 8 (no remainder) where answer doesn’t exceed 10.
    let a1 = 88
    let a2 = 8
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D1_j() { //Divide a number by 9 (no remainder) where answer doesn’t exceed 10.
    let a1 = 99
    let a2 = 9
    while (a1/a2 > 10 || a1%a2 != 0) {
        a1 = Math.floor(Math.random()* (100 - 1) + 1)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function M2_a() { //Multiplication of two two digit numbers (no multiplicative carry).
    let a1 = 99
    let e2prolen = 2 
    let a2 = 22
    while (e2prolen > 1) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (100 - 10) + 10)
        let a1x2 = String(a1).charAt(1)
        let a1e2 = Number(a1x2)
        let a2x2 = String(a2).charAt(1)
        let a2e2 = Number(a2x2)
        let e2xe2 = a1e2*a2e2
        e2prolen = e2xe2.toString().length
        }
    quesAns = [`Multiply ${a1} X ${a2}`, a1*a2]
    return quesAns
}

function M2_b() { ////Multiplication of a  two digit number with a single digit number (with multiplicative carry).

    let a1 = 94
    let e2prolen = 1 
    let a2 = 2
    while (e2prolen <= 1) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
        let a1x2 = String(a1).charAt(1)
        let a1e2 = Number(a1x2)
        let e2xe2 = a1e2*a2
        e2prolen = e2xe2.toString().length
        }
    quesAns = [`Multiply ${a1} X ${a2}`, a1*a2]
    return quesAns
}

function M2_c() { //Multiplication of two two digit numbers (with multiplicative carry).
    let a1 = 99
    let e2prolen = 1
    let a2 = 10
    while (e2prolen <= 1) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (100 - 10) + 10)
        let a1x2 = String(a1).charAt(1)
        let a1e2 = Number(a1x2)
        let a2x2 = String(a2).charAt(1)
        let a2e2 = Number(a2x2)
        let e2xe2 = a1e2*a2e2
        e2prolen = e2xe2.toString().length
        }
    quesAns = [`Multiply ${a1} X ${a2}`, a1*a2]
    return quesAns
}

function M2_d() { //Multiplication of two three digit numbers (with multiplicative carry).
    let a1 = 999
    let e2prolen = 1
    let a2 = 111
    while (e2prolen <= 1) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (1000 - 100) + 100)
        let a1x2 = String(a1).charAt(2)
        let a1e2 = Number(a1x2)
        let a2x2 = String(a2).charAt(2)
        let a2e2 = Number(a2x2)
        let e2xe2 = a1e2*a2e2
        e2prolen = e2xe2.toString().length
        }
    quesAns = [`Multiply ${a1} X ${a2}`, a1*a2]
    return quesAns
}

function D2_a() { //Division of two single digit numbers (with remainder).
    let a1 = 4
    let a2 = 2
    while ( a1%a2 === 0 || a2>=a1) {
        a1 = Math.floor(Math.random()* (10 - 2) + 2)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
    }
    quesAns = [`Divide ${a1} by ${a2} and enter the quotient`, Math.floor(a1/a2)]
    return quesAns
}

function D2_b() { //Division of a two digit number by a single digit number (no remainder).
    let a1 = 44
    let a2 = 33
    while ( a1%a2 != 0 || a2>=a1) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
    }
    quesAns = [`Divide ${a1} by ${a2}`, a1/a2]
    return quesAns
}

function D2_c() { //Division of a two digit number by a single digit number (with remainder).

    let a1 = 44
    let a2 = 2
    while ( a1%a2 === 0) {
        a1 = Math.floor(Math.random()* (100 - 10) + 10)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
    }
    quesAns = [`Divide ${a1} by ${a2} and enter the quotient`, Math.floor(a1/a2)]
    return quesAns
}

function D2_d() { //Division of a multi digit number with a single digit number (with remainder).
    let a1 = 444
    let a2 = 2
    while ( a1%a2 === 0) {
        a1 = Math.floor(Math.random()* (1000 - 100) + 100)
        a2 = Math.floor(Math.random()* (10 - 2) + 2)
    }
    quesAns = [`Divide ${a1} by ${a2} and enter the quotient`, Math.floor(a1/a2)]
    return quesAns
}

function answerCompare(ans) {
    a += 1
    if(quesAns[1] === ans) {
        r += 1
        document.getElementById("feedback").innerHTML = "Yay"
        testingComments()
        levelChecker()
        console.log("Hey")
    } else {
        w += 1
        document.getElementById("feedback").innerHTML = "nope"
        testingComments()
        levelChecker()
    }
}

function levelChecker() { 
    if (a <= 5 && r === 4 && firstPass === false) {
        if (curLevel+1 === levelArre.length) {
            finallevelComments()
        } else {
        levelUp()
        }
    }
    else if (a <= 5 && r === 4 && firstPass === true && curLevel+1 === levelArre.length) {
        finallevelComments()
    }
    else if (a <= 5 && r === 4 && firstPass === true && failCoin === false) {
        levelUp()
    }
    else if (a=== 10 && r < 8) {
        if (curLevel+1 === levelArre.length) {
            finallevelComments()
        } else {
        a = 0
        w = 0
        r = 0
        failCoin = true
        document.getElementById("attempts").innerHTML = `You failed. Let's try again.`
        questionPasser(levelArre[curLevel][0])
        }
    }
    else if (r === 8) {
        levelUp()
    }

    else if (w > 1 && firstPass === false) {
        a = 0
        w = 0
        r = 0
        curLevel -= 1
        
        if (curLevel <= 0) {
            firstPass = true
            curLevel = 0
            questionPasser(levelArre[curLevel][0])
            testingComments()
            
        } else {
            testingComments()
            questionPasser(levelArre[curLevel][0])
        } 
        

    }
    else if (w > 2) {
        a = 0
        w = 0
        r = 0
        failCoin = true
        document.getElementById("attempts").innerHTML = `You failed. Let's try again.`
        questionPasser(levelArre[curLevel][0])
    } else if (a <= 10 && r < 8 && w < 3) {
        questionPasser(levelArre[curLevel][0])
    }
}

function questionPasser(level) {
    var ques = level()[0]
    document.getElementById("QuesSec").innerHTML = ques
    
}

async function updateDB(level, a, w, r){
    const data = {
        "records":[
            {
                "id": userId,
                "fields": {
                    "level": level,
                    "attempts": a,
                    "wrong": w,
                    "right": r,
                }
            }
        ]
    }

    fetch(`https://api.airtable.com/v0/appcJCnPywJw3X3DQ/user-db`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer keyRbbzTThMiRJJO6"
        },
        body: JSON.stringify(data)
    });
}

document.getElementById("feedback").innerHTML = "This is a test."
document.getElementById("attempts").innerHTML = `See how far you can go.`
// document.getElementById("Skoobon prototype 2020").innerHTML = "Skoobon prototype"
questionPasser(levelArre[curLevel][0])


const formElement = document.querySelector("#form")
formElement.addEventListener("submit", event =>{
    event.preventDefault();
    myFunction(); 
    console.log(curLevel, a, w, r);
    updateDB(curLevel, a, w, r)
    document.getElementById("userAns").value=""

})
