import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { CardModule } from "../../shared/components/card/card.module";
import { ContentModule } from "../../content/content/content.module";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        PhotoModule,
        CommonModule,
        CardModule,
        ContentModule
    ]
})
export class PhotoListModule{}