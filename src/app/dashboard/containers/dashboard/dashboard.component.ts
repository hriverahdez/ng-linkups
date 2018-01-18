import { Component, OnInit } from "@angular/core";

interface DashPanel {
  color: string;
  icon: string;
  title: string;
  value: string;
  unit?: string;
  footerIcon: string;
  footerText: string;
}

@Component({
  selector: "lnk-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  panels: DashPanel[] = [
    {
      color: "orange",
      icon: "content_copy",
      title: "Used Space",
      value: "49/50",
      unit: "GB",
      footerIcon: "warning",
      footerText: "Get More Space..."
    },
    {
      color: "green",
      icon: "store",
      title: "Revenue",
      value: "$34,245",
      footerIcon: "date_range",
      footerText: "Last 24 Hours"
    },
    {
      color: "red",
      icon: "info_outline",
      title: "Fixed Issues",
      value: "75",
      footerIcon: "local_offer",
      footerText: "Tracked from Github"
    },
    {
      color: "blue",
      icon: "chat_bubble",
      title: "Followers",
      value: "+245",
      footerIcon: "update",
      footerText: "Just Updated"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
