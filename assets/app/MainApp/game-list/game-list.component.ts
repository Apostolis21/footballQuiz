import {Component, OnInit} from "@angular/core";
import {MainAppService} from "../mainApp.services";
import {ArenaUsers} from "../arenaUsers";




@Component({
    selector:'game-list',
    template: `<div class="col-md-8 col-md-offset-2">
                <h1>Active Games</h1>
                <game-item *ngFor="let arena of arenas" [arena]="arena"></game-item>
               </div>
                `,

})

export  class GameListcomponent implements OnInit{

    ngOnInit(): any {
        console.log('on init');
        this.mainAppService.getArenas()
            .subscribe(
                (arena:ArenaUsers[])=> {
                    this.arenas=arena;
                    console.log(arena)
                });
   }
    constructor(private mainAppService:MainAppService){}
    arenas:ArenaUsers[];
}