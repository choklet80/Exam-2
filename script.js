$(document).ready(function(){
    $('.news__container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
    });
  });


  ol.proj.useGeographic()

    var place = [-73.93, 40.68]
    var point = new ol.geom.Point(place)

    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [new ol.Feature(point)]
            }),
            style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 9,
                fill: new ol.style.Fill({color: 'red'})
            }),  
        }),
    })
          
        ],
        view: new ol.View({
          center: place,
          zoom: 10
        })
      });