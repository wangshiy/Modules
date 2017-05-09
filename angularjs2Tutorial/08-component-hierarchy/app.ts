import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page';

import { EmailComponent } from './email/email';
import { FolderItemComponent } from './email/folder-item';
import { FolderListComponent } from './email/folder-list';
import { MessageBodyComponent } from './email/message-body';
import { MessageDisplayComponent } from './email/message-display';
import { MessageHeaderComponent } from './email/message-header';
import { HelpScreenComponent } from './help/help';

const appRoutes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'help', component: HelpScreenComponent },
  { path: 'hello', component: EmailComponent }
];

@NgModule({
  declarations: [
    PageComponent,
    HelpScreenComponent,
    EmailComponent,
    FolderItemComponent,
    FolderListComponent,
    MessageBodyComponent,
    MessageDisplayComponent,
    MessageHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
