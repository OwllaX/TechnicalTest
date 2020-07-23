import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechnicalTest';

  url1 = 'http://northwind.netcore.io/query/customers.json';
  url2 = 'http://northwind.netcore.io/orders.json';

  customers = [];
  orders = [];

  countCustomers = 0;
  countOrders = 0;

  constructor(private http1: HttpClient, private http2: HttpClient) {
    this.http1.get(this.url1).toPromise().then(data => {

      for (let key in data['results']) {
        if (data['results'].hasOwnProperty(key)) {
          this.countCustomers ++;
        }
      }

      for (let index = 0; index < this.countCustomers; index++) {
        this.customers.push(data.results[index]);
      }

      console.log(this.customers);
    });

    this.http2.get(this.url2).toPromise().then(data => {
      
      for (let key in data['results']) {
        if (data['results'].hasOwnProperty(key)) {
          this.countOrders ++;          
        }
      }

      for (let index = 0; index < this.countOrders; index++) {
        this.orders.push(data.results[index]);
      }

      console.log(this.orders);
    });
  }  
}
