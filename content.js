function removeChat() {
  var node = document.getElementsByClassName("transcript-wrapper");
  if (node.length > 0) {
    console.log("came here1");
    node[0].remove();
  }

  var expandNode = document.getElementsByClassName("player-view-wrapper");
  if (expandNode.length > 0) {
    console.log("came here2");
    expandNode[0].style.width = "calc(100% - 20px)";
  }
}

chrome.runtime.onMessage.addListener((req, p1, p2) => {
  if (!!req.inject) {
    removeChat();
  }
});
