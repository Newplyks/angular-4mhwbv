import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {NotificationService} from '../../modules/shared/services/notification.service';
import {MessageType} from '../../modules/shared/services/notification.service.models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit, OnDestroy {

  public mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;

  fillerNav = [
    {name: 'Example page', link: '/example'},
    {name: 'Lazy Loading Example', link: '/lazy'}
  ];

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router,
              private notifyService: NotificationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('', this.mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('', this.mobileQueryListener);
  }

  logOut() {
    this.notifyService.send(MessageType.Error, 'Not yet implemented');
  }
}
