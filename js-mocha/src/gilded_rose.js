import { AGED_BRIE, BACKSTAGE, CONJURED, SULFURA } from "./constants.js";

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
    this.MAX_QUALITY = 50;
  }

  isValidQuality(quality) {
    return quality < this.MAX_QUALITY;
  }

  passedSellByDate(sellIn) {
    return sellIn < 0;
  }

  increaseQuality(item, increaseNumber = 1) {
    if (this.isValidQuality(item.quality)) {
      return item.quality + increaseNumber > 50
        ? 50
        : item.quality + increaseNumber;
    }
    return item.quality;
  }

  decreaseQuality(item, decreaseNumber = 1) {
    if (item.quality > 0 && item.name.toLowerCase() !== SULFURA.toLowerCase()) {
      return item.quality - decreaseNumber < 0
        ? 0
        : item.quality - decreaseNumber;
    }
    return item.quality;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (this.passedSellByDate(item.sellIn)) {
        switch (item.name.toLowerCase()) {
          case CONJURED.toLowerCase():
            item.quality = this.decreaseQuality(item, 4);
            break;
          case AGED_BRIE.toLowerCase():
            item.quality = this.increaseQuality(item);
            break;
          case BACKSTAGE.toLowerCase():
            item.quality = this.increaseQuality(item, 3);
            break;
          default:
            item.quality = this.decreaseQuality(item, 2);
        }
      } else {
        switch (item.name.toLowerCase()) {
          case CONJURED.toLowerCase():
            item.quality = this.decreaseQuality(item, 2);
            break;
          case BACKSTAGE.toLowerCase():
            let numberToIncrease = 1;
            if (item.sellIn < 11) {
              numberToIncrease = item.sellIn < 6 ? 3 : 2;
            }
            item.quality = this.increaseQuality(item, numberToIncrease);
            break;
          default:
            item.quality = this.decreaseQuality(item);
        }
      }
    }
    return this.items;
  }
}
export { Item, Shop };
