import Header from "@/components/Header.vue";
import Donate from "@/components/Donate.vue";
import Footer from "@/components/Footer.vue";

let request = new XMLHttpRequest();
request.open("GET", "https://api.guildwars2.com/v2/quaggans", true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    document.querySelector("#apistatus").innerHTML = "API is Online! ☑";
  } else {
    document.querySelector("#apistatus").innerHTML = "Error reaching API ☒";
  }
};

request.onerror = function() {
  document.querySelector("#apistatus").innerHTML = "Error reaching API ☒";
};

request.send();

export default {
  components: {
    Header,
    Donate,
    Footer
  }
};
