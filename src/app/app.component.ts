import { Component } from '@angular/core'; //<-- Module not found: Error: Can't resolve '../../package.json' in './src/app
import * as app from "../../package.json";  //<-- Module not found: Error: Can't resolve 'src/environments/environment' in './src/app
import { environment } from '../environments/environment'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(){
    console.log('Version', app.version)
    console.log('Environment', environment.production)
  }
}
