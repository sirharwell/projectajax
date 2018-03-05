var currentProduct = {};
var showForm = false;

$(document).ready( function() {
  $('.product-item').on('click', function() {
    currentProduct.id = this.dataset.id
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('#products');
      list.empty();
      products.forEach( function(char) {
        var li = '<li data-product-id="' + char.id + '">' + char.name + '-' + char.power + '</li>'
        list.append(li)

$('#toggle').on('click', function() {
  showForm = !showForm;
  $('#product-form').remove()
  $('#toggle').on('click', function() {
  toggle();
});

$(document).on('submit', '#game-form form', function(e) {
  $('#products-list').toggle()

  if (showForm) {

    $.ajax({
      url: '/product_form',
      method: 'GET'
    }).done( function(html) {
      $('#toggle').after(html);
    });
  }
})
.done( function(game) {
     toggle()
$(document).on('submit', '#product-form form', function(e) {
  e.preventDefault();
  var data = $(this).serializeArray();
  $.ajax({
    url: '/products',
    type: 'POST',
    dataType: 'JSON',
    data: data
  }).done( function(product) {
    var g = '<li class="product-item" data-id="' + product.id + '" data-name="' + data.name + '">' + product.
    name + '-' + product.name + '</li>';
    $('#products-list').append(g);
  }).fail( function(err) {
    alert(err.responseJSON.errors)
  });
});
      });
    });
  });
})
