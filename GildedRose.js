const maxItemQuality = 50;

class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateItemQuality() {
        if (this.name !== "Sulfuras, Hand of Ragnaros") {
            this.sellIn--;
        }

        if (this.name === "Aged Brie") {
            if (this.sellIn < 0) {
                this.increaseQuality(2);
            } else {
                this.increaseQuality(1);
            }
        }

        if (this.name ===
            "Backstage passes to a TAFKAL80ETC concert" || this.name === "Backstage passes to an Ice Cream Boys concert") {
            this.checkBackstagePass();
        }

        if (this.name === "Conjured Wizard Hat" || this.name === "Conjured Wizard Robes") {
            this.checkConjured();
        }

        if (this.name !== "Sulfuras, Hand of Ragnaros" && this.name !==
            "Backstage passes to a TAFKAL80ETC concert" && this.name !== "Backstage passes to an Ice Cream Boys concert" && this.name !== "Aged Brie"
            && this.name !== "Conjured Wizard Hat" && this.name !== "Conjured Wizard Robes") {
            this.checkNormalItem();
        }
    }

    checkBackstagePass() {
        if (this.sellIn <= 0) {
            this.quality = 0;
            return;
        }

        if (this.sellIn < 11) {

            if (this.sellIn < 6) {
                this.increaseQuality(3);
                return;
            }

            this.increaseQuality(2);
        }
        else {
            this.increaseQuality(1);
        }
    }

    checkConjured() {

        if (this.sellIn < 0) {
            this.decreaseQuality(4);
        }
        else {
            this.decreaseQuality(2);
        }
    }

    checkNormalItem() {
        if (this.sellIn < 0) {
            this.decreaseQuality(2);
        }
        else {
            this.decreaseQuality(1);
        }
    }

    decreaseQuality(amount) {
        if ((this.quality - amount) < 0) {
            this.quality = 0;
        }
        else {
            this.quality -= amount;
        }
    }

    increaseQuality(amount) {
        if ((this.quality + amount) > maxItemQuality) {
            this.quality = maxItemQuality;
        }
        else {
            this.quality += amount;
        }
    }

}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateItemQuality();
        }
    }

    printStock() {
        console.log('Name | Sel | Qua');
        for (let i = 0; i < shop.items.length; i++) {
            console.log(shop.items[i].name, '|', shop.items[i].sellIn, '|', shop.items[i].quality);
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