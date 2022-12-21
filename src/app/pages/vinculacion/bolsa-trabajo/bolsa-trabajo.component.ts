import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bolsa-trabajo",
  templateUrl: "./bolsa-trabajo.component.html",
  styleUrls: ["./bolsa-trabajo.component.css"],
})
export class BolsaTrabajoComponent implements OnInit {

  constructor() {
    // this.loadScripts();
  }

  ngOnInit() {}

  // loadScripts() {
  //   const dynamicScripts = ["https://jobdiscovery-widget-occ.occ.com.mx/vertical-bundle.js"];
  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement("script");
  //     node.src = dynamicScripts[i];
  //     node.type = "text/javascript";
  //     node.id = "bolsa-widget";
  //     node.accessKey = "1bbRSJF2FXPHhIaWRq1twq7pQXL";
  //     node.async = false;
  //     node.charset = "utf-8";
  //     document.getElementsByTagName("head")[0].appendChild(node);
  //     console.log(node);
  //   }
  // }
}
