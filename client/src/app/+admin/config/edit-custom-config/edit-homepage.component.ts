import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'my-edit-homepage',
  templateUrl: './edit-homepage.component.html',
  styleUrls: [ './edit-custom-config.component.scss' ]
})
export class EditHomepageComponent {
  @Input() form: FormGroup
  @Input() formErrors: any
}
