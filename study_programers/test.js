function solution (id_pw, db) {
    let result ='';
    db.map(data => {
        let checkedId = id_pw[0] === data[0]
        let checkedPw = id_pw[1] === data[1]

        if(checkedId && checkedPw) {
            result = 'login';
       } 
        else if (checkedId && !checkedPw) {
            result = 'wrong pw'
       }
        else if(!checkedId && !checkedPw){
            result = 'fail'
        }
    })

    return result
}

function solution (id_pw, db) {
    let result ='';
    db.map(data => {
        let checkedId = id_pw[0] === data[0]
        let checkedPw = id_pw[1] === data[1]

        if(checkedId && checkedPw) {
            result = 'login';
       } 
        else if (checkedId && !checkedPw) {
            result = 'wrong pw'
       }
        else if(!checkedId){
            result = 'fail'
        }
    })

    return result
}