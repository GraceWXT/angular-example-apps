import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    const serverId = parseInt(this.route.snapshot.params.id);
    console.log('serverId', serverId);
    this.server = this.serversService.getServer(serverId);
    this.route.params.subscribe((params: Params) => {
      const serverId = parseInt(params.id);
      this.server = this.serversService.getServer(serverId);
    });
  }

  onEdit() {
    // Using absolute path:
    // this.router.navigate(['servers', this.server.id, 'edit']);
    // Using relative path:
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
