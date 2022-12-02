export const timeConvert = (number: number) => { 
 
    var h = Math.floor(number / 3600);
    var m = Math.floor(number % 3600 / 60);
    var s = Math.floor(number % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    return `${hDisplay}:${mDisplay}:${sDisplay}`;       
}

export const getEnumeratorValues = (enumerator: any) => {
    const keys = Object.keys(enumerator).filter(k => typeof enumerator[k as any] === "number");
    const values = keys.map(k => enumerator[k as any])

    return values;
}

export const getEnumeratorKeys = (enumerator: any) => {
    const keys = Object.keys(enumerator).filter(k => typeof enumerator[k as any] === "number");

    return keys;
}

export const getDynamicEnumaration = (values: Array<number>, basename: string) => {
  
    let enumeration: any = {};

    values.forEach(value => {

        enumeration[`${basename}_${value}`] = value;
        enumeration[value] = `${basename}_${value}`;       
    });

    return enumeration;
}

