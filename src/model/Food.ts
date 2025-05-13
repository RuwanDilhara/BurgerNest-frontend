export class Food{
    constructor(
        private _id:string,
        private _itemName:string,
        private _category:string,
        private _imageURL:string,
        private _price:number,
        private _discount:number
    ){}

    public get id(): string {
        return this._id;
      }
      public set id(value: string) {
        this._id = value;
      }
    
      public get itemName(): string {
        return this._itemName;
      }
      public set itemName(value: string) {
        this._itemName = value;
      }
    
      public get category(): string {
        return this._category;
      }
      public set category(value: string) {
        this._category = value;
      }
    
      public get imageURL(): string {
        return this._imageURL;
      }
      public set imageURL(value: string) {
        this._imageURL = value;
      }
    
      public get price(): number {
        return this._price;
      }
      public set price(value: number) {
        if (value < 0) {
          throw new Error("Price must be a positive number");
        }
        this._price = value;
      }
    
      public get discount(): number {
        return this._discount;
      }
      public set discount(value: number) {
        if (value < 0 || value > 100) {
          throw new Error("Discount must be between 0 and 100");
        }
        this._discount = value;
      }
}