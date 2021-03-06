import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {LoginComponent} from "./auth/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from "./auth/signup.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {routing} from "./app.routing";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {LogoutComponent} from "./auth/logout.component";
import {MainComponent} from "./MainApp/main.component";
import {QuestionStructure} from "./questions/question-structure.component";
import {QuestionService} from "./questions/question.service";
import {MaterialRootModule} from "@angular/material";
import {OpponentComponentFind} from "./MainApp/opponent-find/opponent-find.component";
import {GameListcomponent} from "./MainApp/game-list/game-list.component";
import {GameItemComponent} from "./MainApp/game-list/game-item.component";
import {ArenaComponent} from "./MainApp/arena/arena.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {SocketService} from "./MainApp/socketHanding/socket.service";
import {GameListServices} from "./MainApp/game-list/game-list.services";
import { OpponentFindService} from "./MainApp/opponent-find/opponent-find.sevices";
import {ArenaServices} from "./questions/questionServices/arena.service";
import {QuestionServices} from "./questions/questionServices/question.service";
import {QuestionAnswerServices} from "./questions/questionServices/questionAnswer.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignUpComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        MainComponent,
        QuestionStructure,
        OpponentComponentFind,
        GameListcomponent,
        GameItemComponent,
        ArenaComponent


    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule,MaterialRootModule,Ng2Bs3ModalModule],
    providers:[AuthService,QuestionService,SocketService,GameListServices,OpponentFindService,ArenaServices,QuestionServices,QuestionAnswerServices],
    bootstrap: [AppComponent]
})
export class AppModule {

}