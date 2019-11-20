import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-bar",
  templateUrl: "./contact-bar.component.html",
  styleUrls: ["./contact-bar.component.scss"]
})
export class ContactBarComponent implements OnInit {
  contactItems = [
    { title: "000 (123) 456 7890", description: "A small river named Duden flows", icon: "\f095" },
    { title: "198 West 21th Street", description: "Suite 721 New York NY 10016", icon: "\f095" },
    { title: "Open Monday-Friday", description: "8.00am - 9.00pm", icon: "\f095" }
  ];

  constructor() {}

  ngOnInit() {}
}
