$(document).ready(function () {
  // $('.button-collapse').sideNav();
  $('.scrollspy').scrollSpy();
  $(".left-col-article").css("height", $(".left-col-article").parent().height());
  $(".right-col-article").css("height", $(".right-col-article").parent().height());
  $("#nav-side-single").stick_in_parent({
    offset_top: 80
  });
  $("#nav-side-ad").stick_in_parent({
    offset_top: 500
  });
  $("#nav-side-article").stick_in_parent({
    offset_top: 80
  });
  $("#social-icons-horizontal").stick_in_parent({
    offset_top: $(window).height() - 70,
    spacer: false,
  });
  hljs.initHighlightingOnLoad();

  if (!window.localStorage.getItem("notified-site-change")) {
    generateNotificationTab("hey buddy!",
      "This website or its third-party tools use cookies, which are necessary for its functioning and required to achieve the purposes illustrated in the cookie policy.",
      "You agree to the use of cookies by closing or dismissing this banner, by scrolling this page, by clicking a link or by continuing to browse otherwise.")
  }

});

function generateNotificationTab(heading, message) {

  const notification = document.createElement("div");
  notification.style = "display: flex; z-index:9999999; width: 100%; padding: 10px; text-align: center; padding-left: 5%; padding-right: 5%; color: white; flex-direction: column; align-items: center; justify-content: center; background-color: #17141d; position: fixed; bottom: 0px;"
  notification.id = "notification-alert"
  const notificationHeader = document.createElement("p");
  notificationHeader.style = "font-size: 20px; margin: 0px;"
  notificationHeader.innerText = heading;
  const notificationText = document.createElement("p");
  notificationText.style = "margin: 0px; font-size: 17"
  notificationText.innerText = message;

  const xButton = document.createElement("div");
  xButton.style = "cursor: pointer; display: flex; align-items: center; justify-content: center; background-color: #ff8a00; position: absolute; top: 5px; right: 10px; width: 17px; height: 17px;"
  xButton.addEventListener("click", (event) => {
    document.querySelector("#notification-alert").remove();
  });
  const x = document.createElement("p");
  x.innerText = "x";
  xButton.appendChild(x);
  notification.appendChild(xButton)

  notification.appendChild(notificationHeader);
  notification.appendChild(notificationText);
  document.body.appendChild(notification);
  window.localStorage.setItem("notified-site-change", true)
  console.log(window.localStorage)
}
