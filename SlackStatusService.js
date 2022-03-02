const { WebClient } = require('@slack/web-api');
async function updateStatus(token,text,emoji,expiration) {
    token="xoxp-"+token
    const web = new WebClient(token);
    if(expiration==null){
        expiration=0;//instant
    }
    let time=new Date() + expiration*60 * 1000;
    if(expiration==0){
        time=0;//never
    }
    if(text==null){
        text="";//default
    }
    if(emoji==null){
        emoji="";//default
    }
    const result = await web.users.profile.set({
        profile: {
            "status_text": text,
            "status_emoji": emoji,
            "status_expiration": time
        }
    });
    return result;
}
module.exports.updateStatus=updateStatus
