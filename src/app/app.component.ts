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
      let customerArray = data['results'];

      for (let key in customerArray) {
        if (customerArray.hasOwnProperty(key)) {
          this.customers.push(customerArray[key]);
        }
      }
    });

    this.http2.get(this.url2).toPromise().then(data => {
      let ordersArray = data['results'];
      
      for (let key in ordersArray) {
        if (ordersArray.hasOwnProperty(key)) {
          for(let x in ordersArray[key]) {
            if (x == 'order'){
              ordersArray[key].order.requiredDate = new Date(parseInt(ordersArray[key].order.requiredDate.substr(6)));
            }
          }
          this.orders.push(ordersArray[key]);          
        }
      }
    });
  }  
}
