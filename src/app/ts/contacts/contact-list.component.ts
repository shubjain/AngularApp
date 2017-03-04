  /**
   * Created by shujain on 1/13/2017.
   */
  import {Component} from "@angular/core"

  @Component({
    selector: "contact-list",
    template:`
    <ul>
          <li *ngFor="let contact of contacts"
              (click)="OnSelect(contact)"
              ><span [class.clicked]="contact.showDetail === true">
              {{contact.firstName}}</span> {{contact.lastName}} <br>
              <contact-details [contact]="contact"></contact-details>
          </li>
    </ul>
    `,
    styleUrls: ["../../styles.css"]
  })

  export class ContactListComponent{
    public contacts = [
      {firstName: "Shubham", lastName: "Jain", phone: "0989472898", email: "abc@gmail.com", showDetail: false},
      {firstName: "Aman", lastName: "Jain", phone: "6345634", email: "def@gmail.com", showDetail: false},
      {firstName: "Ashish", lastName: "Jain", phone: "36456346345", email: "ghi@gmail.com", showDetail: false},
      {firstName: "Pranav", lastName: "Jain", phone: "4563434565", email: "jkl@gmail.com", showDetail: false},
    ];
    public openId = -1;

    public OnSelect(contact: any){
      if (this.openId != -1){
        this.contacts[this.openId].showDetail = false;
      }
      contact.showDetail = true;
      this.openId = this.contacts.indexOf(contact);
    }
  }
