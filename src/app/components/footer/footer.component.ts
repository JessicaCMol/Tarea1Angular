import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date:number
  constructor() {
    this.date = new Date().getDate();

   }

  ngOnInit(): void {

    console.log("Hola desde el On Init")
    
  }

}
