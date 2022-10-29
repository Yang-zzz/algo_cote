morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    var answer = '';
    let arr = letter.split(' ');
    for(let i=0; i<arr.length; i++) {
        console.log(`arr배열의 인덱스 : ${arr[i]}`);
        for(const sign in morse) {
            console.log(`morse의 키값 : ${sign}`)
            if(sign === arr[i]) {
                answer += morse[sign];
            }
        }
    } return answer
}

// for
//for in 으로 객체의 키값을 순홚