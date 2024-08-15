import { UnionCar, UnionMobile } from "./utils/data.interface";

//속성이 많아 진다면 if문보다는 switch문으로 작성하는게 더 가독성이 높다.
function getGift(gift: UnionCar | UnionMobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}