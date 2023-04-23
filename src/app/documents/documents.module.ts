import {NgModule} from "@angular/core";
import {DocumentsRoutingModule} from "./documents-routing.module";
import {DocumentsComponent} from "./documents.component";

@NgModule({
  imports: [DocumentsRoutingModule],
  declarations: [DocumentsComponent],
  exports: [DocumentsComponent],
  providers: []
})
export class DocumentsModule {}
