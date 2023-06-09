import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'documents', component: DocumentsComponent},
      {path: 'documents/:classificationId', component: DocumentsComponent}
    ])
  ],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
