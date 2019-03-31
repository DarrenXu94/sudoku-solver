interface BoardRow {
    [index: number]: number
}

// interface BoardRow {
//     [index: number]: [number, number, number, number, number, number, number, number, number ]
// }

type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & { length: TLength };

type Tuple9<T> = Tuple<T, 9>;
export type Board9x9<P> = Tuple9<Tuple9<P>>;

export interface Board {
    [index: number]: BoardRow;
}