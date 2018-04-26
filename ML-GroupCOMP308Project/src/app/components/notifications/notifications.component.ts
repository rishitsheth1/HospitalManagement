import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  messages: any;

  constructor(private _authService: AuthService, private notificationService: NotificationsService) {
    this.notificationService.getAlerts(this._authService.nurseId())
      .subscribe(messages => this.messages = messages);
  }

  ngOnInit() {
  }

  resolve() {
  }
}
