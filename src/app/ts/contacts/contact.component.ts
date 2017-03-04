/**
 * Created by shujain on 1/13/2017.
 */
import {Component} from "@angular/core"

@Component({
  selector: "contact-details",
  template:`
   <input *ngIf="contact.showDetail === true" [(ngModel)]="contact.firstName" type="text" />
   <div *ngIf="contact.showDetail === true">
           Phone Number: {{contact.phone}} <br>
           Email: {{contact.email}}
   </div>
  `,
  inputs: ["contact"]
})

export class ContactComponent{
    public contact = {};
}
