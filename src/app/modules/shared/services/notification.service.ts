import {Injectable} from '@angular/core';
import {IndividualConfig, ToastrService} from 'ngx-toastr';
import {MessageType} from './notification.service.models';
//https://www.npmjs.com/package/ngx-toastr
@Injectable()
export class NotificationService {

  constructor(private toastService: ToastrService) {
  }

  send(type: MessageType, text: string, title: string = '', closeButton: boolean = false) {
    const config: Partial<IndividualConfig> = Object.assign({}, this.defaultConfig, {closeButton: closeButton});
    const messageText = NotificationService.prepare(text);

    switch (type) {
      case MessageType.Success:
        this.toastService.success(messageText, title, config);
        break;
      case MessageType.Warning:
        this.toastService.warning(messageText, title, config);
        break;
      case MessageType.Error:
        this.toastService.error(messageText, title, config);
        break;
    }

  }

  private defaultConfig: Partial<IndividualConfig> = {
    timeOut: 20000,

    enableHtml: true,
  };

  private static prepare = (message: string) => message.replace('\n', '<br/>');

}
