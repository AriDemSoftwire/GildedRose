


isBackstagePass(name, sellIn, quality) {
   if (name !=
    "Backstage passes to a TAFKAL80ETC concert" || name != "Backstage passes to an Ice Cream Boys concert") {
        return;
    }
    if (sellIn <= 5 && sellIn > 0) {
        quality = quality + 3;
    } else
    if (sellIn <= 10 && sellIn > 5) {
        quality = quality + 2;
    } else
    if (sellIn === 0) {
        quality = 0;
    } else {
        quality++;
    }

}

isBrie(name, sellIn, quality) {
    if (name === "Aged Brie" && quality < 50) {
        quality++;
    }
}

isConjured(name, sellIn, quality) {
    if (name === "Conjured Wizard Hat" || name === "Conjured Wizard Robes") {
        if (quality >= 0) {
        quality = quality - 2;
    }
}
}