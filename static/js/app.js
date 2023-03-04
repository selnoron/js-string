// 1
function len(str) {
    return str.length
}

console.log(len("JavaScript"))

// 2
function joinStr(str) {
    return str.split(" ").join("")
}

console.log(joinStr("Java Script"))

// 3
function str(str) {
    return str.split(" ").join("_")
}

console.log(str("Java Script"))

// 4
function str2(str) {
    return str.slice(0, 3) == "ipt"
}

console.log(str2("Java Script"))

// 5
function str3(str) {
    return str.slice(str.length - 3, str.length) == "ipt"
}

console.log(str3("Java Script"))

// 6
function str4(str) {
    return str[0].toUpperCase()
}

console.log(str4("java Script"))

// 7
function str5(str) {
    return str[str.length - 1].toLowerCase()
}

console.log(str5("java ScripT"))

// 8
str4 = "ap4oief2oiu5hg1" 
str4 = str4.split("") 
for (let i = 0; i < str4.length; i++) { 
    if (Number(str4[i]) > 0 || Number(str4[i]) <= 0) { 
        str4.splice(i, 1) 
    } 
} 
console.log(str4.join(""))

// 9
st = "java ScripT"
stt = st.split("")
let glas = ['a', 'e', 'i', 'u', 'y', 'o']
for (let i = 0; i < glas.length; i++) { 
    for (let j = 0; j < stt.length; j++) { 
        if (stt[j] == glas[i]) {
            stt.splice(j, 1)
        }
    } 
} 
console.log(stt.join(""))

// 10
console.log(st.split(" "))