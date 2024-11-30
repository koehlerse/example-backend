export class Brands {
    private name: string;
    private founded: string;
    private productName: string[];
    private ratings: string[];  
    private prices: string[];

    setName(name: string)
    {
        this.name = name;
    }

    setFounded(founded: string)
    {
        this.founded = founded
    }

    setProductName(name: string)
    {
        this.productName.push(name);
    }

    setRatings(rating: string)
    {
        this.ratings.push(rating)
    }

    setPrice(price: string)
    {
        this.prices.push(price);
    }

    getName(): string {
        return this.name;
    }

    getFounded(): string {
        return this.founded;
    }

    getProductName(): string[] {
        return this.productName;
    }

    getRatings(): string[] {
        return this.ratings;
    }

    getPrices(): string[] {
        return this.prices;
    }

    toString(): string
    {
        return this.name + this.founded + this.productName + this.ratings + this.prices;
    }
}
