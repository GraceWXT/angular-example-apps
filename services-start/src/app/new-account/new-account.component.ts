import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService], - Injecting into accountsServices
  // AppComponent provides the accountsService instance - do not provide another instance here
})
export class NewAccountComponent {
  constructor(
    // private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    /** The event handler for statusUpdated */
    const next = (status: string) => alert(`NewStatus:${status}`);
    this.accountsService.statusUpdated.subscribe(next);
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
