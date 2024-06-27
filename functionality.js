function nextCard(direction) {
  const card1 = window.document.querySelector("#card0");
  let margin = window.getComputedStyle(card1).marginLeft;
  const marginNumber = Number(margin.substring(0, margin.length - 2));
  if (
    margin > 1525 ||
    marginNumber + direction > 1575 ||
    marginNumber + direction < -1575
  ) {
    card1.style.marginLeft = "1525px";
  } else {
    card1.style.marginLeft = String(marginNumber + direction) + "px";
  }
  margin = window.getComputedStyle(card1).marginLeft;
  const cards = window.document.querySelectorAll(".service");
  const curCenter =
    -Math.floor(Number(margin.substring(0, margin.length - 2)) / 620) + 2;
  cards[curCenter].style.maskImage = "";
  if (curCenter > 0 && curCenter < cards.length - 1) {
    cards[curCenter - 1].style.maskImage =
      "linear-gradient(to left, white, transparent 40%)";
    cards[curCenter + 1].style.maskImage =
      "linear-gradient(to right, white, transparent 40%)";
    document.querySelector("#left").style.visibility = "visible";
    document.querySelector("#right").style.visibility = "visible";
  } else if (curCenter === 0) {
    document.querySelector("#left").style.visibility = "hidden";
    cards[curCenter + 1].style.maskImage =
      "linear-gradient(to right, white, transparent 40%)";
  } else {
    document.querySelector("#right").style.visibility = "hidden";
    cards[curCenter - 1].style.maskImage =
      "linear-gradient(to left, white, transparent 40%)";
  }
}

function infoCardPressed(cardMember) {
  const memberDiv = cardMember.children[0];
  const face = memberDiv.children[0].src;
  const nameDiv = memberDiv.children[1];
  const firstName = nameDiv.children[0].innerText;
  const lastName = nameDiv.children[1].innerText;
  const memberRole = cardMember.children[1].innerText;
  const memberDescription = cardMember.children[2].innerHTML;

  const infoCard = document.querySelector("#member-info");
  const memberInfo = infoCard.children[0];
  const memberName = memberInfo.children[0];
  const firstNameInfoCard = memberName.children[0];
  const lastNameInfoCard = memberName.children[1];
  const infoImage = memberInfo.children[1];
  const infoPosition = memberInfo.children[2];
  const positionInfo = infoCard.children[2];

  firstNameInfoCard.innerText = firstName;
  lastNameInfoCard.innerText = lastName;
  infoImage.src = face;
  infoPosition.innerText = memberRole;
  positionInfo.innerText = memberDescription;

  console.log(positionInfo.innerText);

  infoCard.style.visibility = "visible";
  document.querySelector("#bottom-container").style.filter = "blur(2px)";
}

function closeInfoCard() {
  document.querySelector("#bottom-container").style.filter = "";
  document.querySelector("#member-info").style.visibility = "hidden";
}
