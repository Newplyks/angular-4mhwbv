import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/services/notification.service';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {MessageType} from '../../../shared/services/notification.service.models';
import {distinctUntilChanged, filter} from 'rxjs/operators';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.less']
})
export class ReactiveFormExampleComponent implements OnInit, OnDestroy {

  constructor(private notifyService: NotificationService) {
    this.notifyService.send(MessageType.Success, 'Hello World', 'From Notification Service', true);
    this.form = ReactiveFormExampleComponent.initForm();
  }

  public readonly form: FormGroup;


  ngOnInit() {
    this.addItem();
    const controlsSubscriptions: Array<Subscription> = this.onFormChanges(this.form);
    this.subscriptions.push(...controlsSubscriptions);
  }

  public get items(): FormArray {
    return <FormArray>this.form.get('items');
  }

  public addItem() {
    const group = new FormGroup({
      uniqueProp: new FormControl('', [Validators.required, RxwebValidators.unique()])
    });

    this.items.push(group);
  }

  public deleteItem(i: number) {
    if (this.items.length <= 1) {
      return;
    }
    this.items.removeAt(i);
  }

  public onSubmit() {
    console.log(this.form.value);
  }

  private static initForm(): FormGroup {
    return new FormGroup({
      info: new FormGroup({
        number: new FormControl(null),
        userName: new FormControl(null, {validators: [Validators.maxLength(50)], updateOn: 'blur'})
      }),
      address: new FormGroup({
        name: new FormControl('', Validators.required),
        zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
      }),
      items: new FormArray([], Validators.required)
    });
  }

  private onFormChanges(form: FormGroup): Array<Subscription> {

    const userNameControl: AbstractControl = form.get('info.userName');

    const userNameSubscription: Subscription = userNameControl.valueChanges.pipe(
      distinctUntilChanged(),
      filter((v) => v && v !== v.trim())
    ).subscribe((inputText: string) => userNameControl.patchValue(inputText.trim()));

    return [userNameSubscription];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private readonly subscriptions: Array<Subscription> = [];
}
