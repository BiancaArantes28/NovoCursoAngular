import { Component } from "@angular/core";

@Component({
    templateUrl: './datatable.component.html'
})
export class DataTableComponent{

    title: string = "Testando DataTable";
    title_icon: string = "fa fa-comment-o font-green-steel";
    navegations = [
        {
        'name': 'Home',
        'url': 'teste2'
        },
        {
        'name': 'Teste',
        'url': 'teste2'
        },
        {
        'name': 'Photos',
        'url': 'teste2'
        },
    ];
}