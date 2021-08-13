    let uid = (length=""||25) => {
        let id = '';
        for(id;id.length < length;){
            id += Math.random().toString(36).substring(2);
        }
        let getDWID = new Date().getDate()+""+new Date().getHours()+""+new Date().getMinutes()+""+new Date().getMilliseconds()+""+new Date().getSeconds();            
        return "0"+id.substring(0, length)+""+getDWID;
        }

module.exports = {uid};
