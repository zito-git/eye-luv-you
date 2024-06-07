const names = [
  "웃는군돌이",
  "공부하는군돌이",
  "뛰는군돌이",
  "쉬는군돌이",
  "먹는군돌이",
  "자는군돌이",
  "노는군돌이",
  "노래하는군돌이",
  "춤추는군돌이",
  "그림그리는군돌이",
  "산책하는군돌이",
  "운동하는군돌이",
  "생각하는군돌이",
  "일하는군돌이",
  "요리하는군돌이",
  "책읽는군돌이",
  "쇼핑하는군돌이",
  "영화보는군돌이",
  "게임하는군돌이",
  "청소하는군돌이",
  "빨래하는군돌이",
  "설거지하는군돌이",
  "정리하는군돌이",
  "글쓰는군돌이",
  "사진찍는군돌이",
  "커피마시는군돌이",
  "친구만나는군돌이",
  "여행하는군돌이",
  "배달하는군돌이",
  "택시타는군돌이",
  "버스타는군돌이",
  "지하철타는군돌이",
  "운전하는군돌이",
  "산에오르는군돌이",
  "바다가는군돌이",
  "자전거타는군돌이",
  "스키타는군돌이",
  "스노우보드타는군돌이",
  "서핑하는군돌이",
  "캠핑하는군돌이",
  "낚시하는군돌이",
  "꽃구경하는군돌이",
  "별구경하는군돌이",
  "음악듣는군돌이",
  "강아지산책시키는군돌이",
  "고양이돌보는군돌이",
  "새우는군돌이",
  "우는군돌이",
  "웃기는군돌이",
  "축구하는군돌이",
];
function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function setupName() {
  const name = document.getElementById("nickname");
  name.value = getRandomName() + getRandomNumber();
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10000) + 1;
}
