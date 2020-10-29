
AFRAME.registerComponent('change-color-on-click', {
    // Could use a schem to preserve the color! then simply change it on update
    // if clicked?
    init: function () {
    var COLORS = [
    'pink',
    //'blue',
    'yellow',
    'red',
    'peachpuff',
    '#2EAFAC',
    '#BAE'];
    this.el.addEventListener('click', function (evt) {
    var randomIndex = Math.floor(Math.random() * COLORS.length);
    var newColor = COLORS[randomIndex];
    this.setAttribute('material', 'color', newColor);
    console.log('I was clicked at: ', evt.detail.intersection.point, "and my new color is: ", newColor);
    });
    }
    });
 AFRAME.registerComponent('hover', {
    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });

AFRAME.registerComponent('clicky', {
    init: function () {
        console.log("clicky mc click");
      var cur = document.querySelector('#cursor')
      var c1 = 'cyan'
      var c2 = 'yellow'
      this.el.addEventListener('mouseenter', function () {
        
        cur.setAttribute('scale', {x:2, y:2, z:2});
      });
        this.el.addEventListener('mousedown', function () {
        cur.setAttribute('material','color', c2);
        cur.setAttribute('scale', {x:2, y:2, z:2});
      });
        this.el.addEventListener('mouseup', function () {
        cur.setAttribute('material','color', c1);
        cur.setAttribute('scale', {x:2, y:2, z:2});
      });
        this.el.addEventListener('mouseup', function () {
        cur.setAttribute('material','color', c1);
        cur.setAttribute('scale', {x:1, y:1, z:1});
      });
    }
}); 

