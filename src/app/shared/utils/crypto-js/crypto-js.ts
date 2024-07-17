import * as CryptoJS from "crypto-js"
import { environment } from "../../../../environments/environment";

export const encrypt = (data: string): string => {
    return CryptoJS.AES.encrypt(data, environment.secretKeys.userKey).toString();
};  

export const decrypt = <T>(valueEncrypt: string):T | null =>{
    const valueDecrypt = CryptoJS.AES.decrypt(valueEncrypt, environment.secretKeys.userKey).toString(CryptoJS.enc.Utf8);
    if(!valueDecrypt){
        return null;
    }
    return JSON.parse(valueDecrypt) as T;
}