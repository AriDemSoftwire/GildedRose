class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {    

            if (this.items[i].name !== "Sulfuras, Hand of Ragnaros") {
                this.items[i].sellIn--;
            }

            if (this.items[i].name === "Aged Brie") {
                if (this.items[i].sellIn < 0) {
                    this.items[i].quality += 2;
                } else {
                this.items[i].quality++;
                }
            }

            if (this.items[i].name ===
                "Backstage passes to a TAFKAL80ETC concert" || this.items[i].name === "Backstage passes to an Ice Cream Boys concert") {
                this.items[i].quality = this.BackstagePass(this.items[i].sellIn, this.items[i].quality);
            }

            if (this.items[i].name === "Conjured Wizard Hat" || this.items[i].name === "Conjured Wizard Robes") {
                this.items[i].quality = this.Conjured(this.items[i].sellIn, this.items[i].quality);
            }

            if (this.items[i].name !== "Sulfuras, Hand of Ragnaros" && this.items[i].name !==
                "Backstage passes to a TAFKAL80ETC concert" && this.items[i].name !== "Backstage passes to an Ice Cream Boys concert" && this.items[i].name !== "Aged Brie"
                && this.items[i].name !== "Conjured Wizard Hat" && this.items[i].name !== "Conjured Wizard Robes") {
                this.items[i].quality = this.NormalItem(this.items[i].sellIn, this.items[i].quality);
            }
        }

        return this.items;

    }

    BackstagePass(sellIn, quality) {
        if (sellIn < 5 && 0 < sellIn) {
            quality = quality + 3;
            return quality;
        } else
            if (sellIn < 10 && 5 <= sellIn) {
                quality = quality + 2;
                return quality;
            } else
                if (sellIn <= 0) {
                    quality = 0;
                    return quality;
                } else {
                    quality++;
                    return quality;
                }
    }

    Conjured(sellIn, quality) {
        if (sellIn < 0) {
            quality -= 4;
            if (quality >= 0) {
            return quality; 
        } else {
            return 0;
        }
    } else {
        quality -= 2;
        if (quality >= 0) {
            return quality; 
        } else {
            return 0;
    }
    }
}

    NormalItem(sellIn, quality) {
        if (sellIn < 0) {
            if (quality > 0) {
                quality -= 2;
            }
                if (quality >= 0) {
                    return quality; 
                } else {
                    return 0;
                }
        } else {
        if (quality > 0) {
            quality--;
        }
        if (quality >= 0) {
            return quality; 
        } else {
            return 0;
        }
    }
    }


    printStock() {
        console.log('Name | Sel | Qua');
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].name, '|', this.items[i].sellIn, '|', this.items[i].quality);
        }
    }
}

const shop = new Shop([
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Aged Brie", 10, 0),
    new Item("Witchwood Apple", 3, 15),
    new Item("Diving Elixir", 11, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 5),
    new Item("Backstage passes to a TAFKAL80ETC concert", 25, 5),
    new Item("Backstage passes to an Ice Cream Boys concert", 25, 5),
    new Item("Conjured Wizard Hat", 20, 50),
    new Item("Conjured Wizard Robes", 16, 50),
]);

shop.printStock();

for (let day = 1; day < 21; day++) {
    console.log(`Day ${day}`)
    shop.updateQuality();
    shop.printStock();
}