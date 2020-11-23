import CryptoJS from 'crypto-js'
 
export const encrypt = (word) => {
    var key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

export const decrypt = (word) => {
    var key = CryptoJS.enc.Utf8.parse("46cc793c53dc451b");
    var decrypt = CryptoJS.AES.decrypt(word, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
/* var iv = CryptoJS.enc.Utf8.parse('1234567812345678')
var cryptoObj={
    //加密
    encryptFunc:(word,keyStr)=>{
        var key = CryptoJS.enc.Utf8.parse(keyStr);
        var encryptedObj = CryptoJS.AES.encrypt(word,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
        return encryptedObj.toString();
    },
    //解密
    decryptFunc: (word, keyStr) => {
        var key = CryptoJS.enc.Utf8.parse(keyStr);
        return CryptoJS.AES.decrypt(word,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
    },
}

export default cryptoObj */