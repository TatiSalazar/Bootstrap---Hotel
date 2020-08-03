$(function () {
          $("[data-toggle='tooltip']").tooltip();
          $("[data-toggle='popover']").popover();
          $('.carousel').carousel({
                    interval: 4000
          });
          $('#contacto').on('show.bs.modal', function (e) {
                    console.log('el modal se esta mostrando');

                    $('#contactoBtn').removeClass('btn-outline-success');
                    $('#contactoBtn').addClass('btn-primary');
                    $('#contactoBtn').prop('disabled', true);
          });
          $('#contacto').on('show.bs.modal', function (e) {
                    console.log('el modal se esta mostrando');
          });
          $('#contacto').on('hide.bs.modal', function (e) {
                    console.log('el modal se esta ocultando');
          });
          $('#contacto').on('hidden.bs.modal', function (e) {
                    console.log('el modal contacto se oculto');
                    $('#contactoBtn').prop('disabled', false);
          });

});