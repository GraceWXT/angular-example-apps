import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Using route snapshot params to get server id and retrieve server info
    // const serverId = parseInt(this.route.snapshot.params.id);
    // console.log('serverId', serverId);
    // this.server = this.serversService.getServer(serverId);
    // this.route.params.subscribe((params: Params) => {
    //   const serverId = parseInt(params.id);
    //   this.server = this.serversService.getServer(serverId);
    // });

    // Using the ServerResolver to get serverInfo
    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  onEdit() {
    // Using absolute path:
    // this.router.navigate(['servers', this.server.id, 'edit']);
    // Using relative path:
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    });
  }
}
