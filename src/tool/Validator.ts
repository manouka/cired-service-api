export const IsValueAllowed = <V, T>(value: V, valuesAllowed: T): boolean => {
    return Object.values(valuesAllowed).includes(value);   
}

export const IsValueRangedAllowed = (value:number, min: number, max: number): boolean => {
    return (value >= min && value <= max); 
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type valueRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

