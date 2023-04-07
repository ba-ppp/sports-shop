export interface IToken {
    access_token: string;
    refresh_token: string;
}

export interface CartItem {
    id: number;
    name: string;
    price: string;
    discountPrice?: string;
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

export interface FetchData {
    data: Category[];
}

export interface Category {
    categoryId: string;
    name: string;
}

export interface ProductSize {
    id: number;
    name: string;
    price: number;
    productId: number;
}

export interface ProductItem {
    id: number;
    name: string;
    quantity: number;
    url: string;
    price: number;
    description: string;
    categoryId: string;
    category: null;
    sizes: ProductSize[];
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}