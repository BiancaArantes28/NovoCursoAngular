var PropostaTable = function () {

    var initTable1 = function () {
        var table = $('#datatable');

        var oTable = table.dataTable({
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n            
            // Or you can use remote translation file
            "language": {
                url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
            },

            // setup buttons extentension: http://datatables.net/extensions/buttons/
            buttons: [
                //{ extend: 'print', className: 'btn dark btn-outline' },
                //{ extend: 'pdf', className: 'btn green btn-outline' },
                //{ extend: 'csv', className: 'btn purple btn-outline ' },
                //{ extend: 'excel', className: 'btn green-jungle btn-outline ' }
            ],

            // setup responsive extension: http://datatables.net/extensions/responsive/
            responsive: {
                details: {
                    type: 'column',
                    target: 'tr'
                }
            },
            columnDefs: [{
                //className: 'control',
                orderable: false,
                targets: [9]
            }],


            order: [0, 'asc'],

            // pagination control
            "lengthMenu": [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,
            "pagingType": 'bootstrap_extended', // pagination type

            "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });
    }

    var handleBootstrapConfirmation = function () {
        if (!$().confirmation) {
            return;
        }
        $('[data-toggle=confirmation]').confirmation({ btnOkClass: 'btn btn-sm btn-success', btnCancelClass: 'btn btn-sm btn-danger' });
    }

    var ui_confirmation = function () {

        $('[data-toggle="confirmation"]').on('confirmed.bs.confirmation', function (e) {
            var idIndicacao = $(this).data("indicacao");
            var idIndicacaoStatus = $(this).data("status");
            TrocarStatusIndicacao(idIndicacao, idIndicacaoStatus);           
        });               
    }

    return {
        //main function to initiate the module
        init: function () {
            initTable1();
            handleBootstrapConfirmation();
            ui_confirmation();
        }
    };

}();

jQuery(document).ready(function () {
    PropostaTable.init();
});