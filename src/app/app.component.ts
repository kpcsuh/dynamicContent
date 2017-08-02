import {AfterViewInit, Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Manual Entry Screen';

  constructor(private router: Router) {

  }

  ngAfterViewInit() {
    this.router.navigate(["/login"]);
  }
}
