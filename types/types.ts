export interface IToken {
    access_token: string;
    refresh_token: string;
}

export interface CartItem {
    id: string;
    name: string;
    price: string;
    discountPrice: string;
    imageURL?: string;
    quantity: number;
}

export interface KeyValue {
    [key: string]: string;
}

export interface StatusCell {
    isActive?: boolean;
    isLow?: boolean;
    isOut?: boolean;
    isIn?: boolean;
    isDelivered?: boolean;
    isPending?: boolean;
}

export interface TableRow {
    id: string;
    editableCell?: KeyValue;
    inforCell?: KeyValue;
    status?: StatusCell;
}