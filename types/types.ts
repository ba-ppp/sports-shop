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