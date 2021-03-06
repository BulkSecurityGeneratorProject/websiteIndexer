import {Component, OnInit} from '@angular/core';
import {TasksService} from './tasks.service';
import {CrawlStats} from './crawl-stats.model';

@Component( {
                selector: 'jhi-task-overview', templateUrl: './task-overview.component.html', styles: []
            } )
export class TaskOverviewComponent implements OnInit {

    cores: number;
    crawlStats: CrawlStats[];

    constructor( private taskService: TasksService ) {
    }

    ngOnInit() {
        this.cores = 4; // todo get available resources from backend
        this.taskService.stats().subscribe( ( res: CrawlStats[] ) => this.crawlStats = res );
    }
}
