import { expect } from "chai";
import { Shop, Item } from "../src/gilded_rose.js";

describe("Gilded Rose", () => {
  describe("Manage quality", () => {
    it("should keep the same quality of Sulfura", () => {
      const sample = [
        {
          name: "Sulfuras, Hand of Ragnaros",
          sellIn: 4,
          quality: 80,
          expectedQuality: 80
        },
        {
          name: "Sulfuras, Hand of Ragnaros",
          sellIn: 7,
          quality: 80,
          expectedQuality: 80
        }
      ];
      sample.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
    it("should decrease quality of items", () => {
      const sample = [
        {
          name: "anything 1",
          sellIn: 4,
          quality: 20,
          expectedQuality: 19
        },
        {
          name: "anything 2",
          sellIn: 7,
          quality: 1,
          expectedQuality: 0
        },
        {
          name: "Conjured",
          sellIn: 7,
          quality: 1,
          expectedQuality: 0
        },
        {
          name: "Conjured",
          sellIn: 5,
          quality: 4,
          expectedQuality: 2
        }
      ];
      sample.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
    it("should increase quality of items", () => {
      const sample = [
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 10,
          quality: 9,
          expectedQuality: 11
        },
        {
          name: "Backstage passes TO a TAFKAL80ETC concert",
          sellIn: 6,
          quality: 3,
          expectedQuality: 5
        },
        {
          name: "Backstage passes to a TAFKAL80ETC concert",
          sellIn: 4,
          quality: 3,
          expectedQuality: 6
        },
        {
          name: "Backstage passes to a tafkal80etc concert",
          sellIn: 4,
          quality: 49,
          expectedQuality: 50
        }
      ];
      sample.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
  });
  describe("Manage passed sell by date quality", () => {
    it("should keep the same quality", () => {
      const sampleFreezeQuality = [
        {
          name: "aged brie",
          sellIn: -1,
          quality: 50,
          expectedQuality: 50
        },
        {
          name: "anything",
          sellIn: -1,
          quality: 0,
          expectedQuality: 0
        }
      ];
      sampleFreezeQuality.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
    it("should increase quality of items", () => {
      const sample = [
        {
          name: "Aged Brie",
          sellIn: -3,
          quality: 10,
          expectedQuality: 11
        },
        {
          name: "aged Brie",
          sellIn: -2,
          quality: 20,
          expectedQuality: 21
        },
        {
          name: "aged brie",
          sellIn: -1,
          quality: 49,
          expectedQuality: 50
        },
        {
          name: "backstage passes to a TAFKAL80ETC concert",
          sellIn: -5,
          quality: 2,
          expectedQuality: 5
        }
      ];
      sample.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
    it("should decrease the quality of items", () => {
      const sample = [
        {
          name: "anything 1",
          sellIn: -10,
          quality: 10,
          expectedQuality: 8
        },
        {
          name: "anything 2",
          sellIn: -2,
          quality: 1,
          expectedQuality: 0
        },
        {
          name: "conjured",
          sellIn: -7,
          quality: 10,
          expectedQuality: 6
        },
        {
          name: "Conjured",
          sellIn: -5,
          quality: 3,
          expectedQuality: 0
        }
      ];
      sample.forEach(element => {
        const gildedRose = new Shop([
          new Item(element.name, element.sellIn, element.quality)
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(element.expectedQuality);
      });
    });
  });
});
