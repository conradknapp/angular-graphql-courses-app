import { Component, OnInit, Input } from "@angular/core";
import { Course } from "../types";
import { CourseService } from "../course.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() {}
}
