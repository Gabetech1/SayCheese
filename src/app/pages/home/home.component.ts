import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
rates;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.forex().subscribe(res =>{
      console.log(res)
      this.rates=res['rates'];
    })
  }

}
