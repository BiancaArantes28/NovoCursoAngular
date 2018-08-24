import { NgModule } from "@angular/core";
import { DataTableComponent } from "./datatable.component";
import { ContentModule } from "../content/content/content.module";

@NgModule({
    declarations: [ DataTableComponent ],
    exports: [ DataTableComponent ],
    imports: [ ContentModule ]
})
export class DataTableModule{}