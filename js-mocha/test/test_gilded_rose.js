import  { expect } from 'chai';
import  { Shop, Item } from '../src/gilded_rose.js';

describe("Gilded Rose", () =>  {

  it("should foo", () =>  {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

});
