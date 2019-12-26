import Header from "@/components/Header.vue";
import Donate from "@/components/Donate.vue";
import Footer from "@/components/Footer.vue";

let request = new XMLHttpRequest();
request.open("GET", "https://api.guildwars2.com/v2/quaggans", true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    document.getElementById("apistatus").innerHTML = "API is Online";
    document.getElementById("apicheck").classList.add("online");
  } else {
    document.getElementById("apistatus").innerHTML = "Error reaching API";
    document.getElementById("apicheck").classList.add("offline");
  }
};

request.onerror = function() {
  document.getElementById("apistatus").innerHTML = "Error reaching API";
  document.getElementById("apicheck").classList.add("offline");
};

request.send();

export default {
  components: {
    Header,
    Donate,
    Footer
  }
};
