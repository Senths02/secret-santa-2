$( document ).ready(function() {

    if($(".start-screen active")){

        $("#start-button").click(function(){
            $(".start-screen").hide();
            $(".start-screen").removeClass("active");
            $(".game").addClass("active");
            $(".game").show();
        });
    }
});

var headMoved = false;

AFRAME.registerComponent('move-head', {
    schema: {
      toPosition: {default: '2 2 -9'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.setAttribute('position', data.toPosition);
        headMoved = true;
      });
    }
});

AFRAME.registerComponent('move-nose', {
    schema: {
      toPosition: {default: '1.9 2 -8'},
      toRotation:{default: '90 0 0'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        if(headMoved === true){
            this.setAttribute('position', data.toPosition);
            this.setAttribute('rotation', data.toRotation);
        }
      });
    }
});


AFRAME.registerComponent('move-left-eye', {
    schema: {
      toPosition: {default: '1.5 2.2 -8.4'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        if(headMoved === true){
            this.setAttribute('position', data.toPosition);
        }
      });
    }
});


AFRAME.registerComponent('move-right-eye', {
    schema: {
      toPosition: {default: '2.3 2.2 -8.2'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        if(headMoved === true){
            this.setAttribute('position', data.toPosition);
        }
      });
    }
});

AFRAME.registerComponent('move-hat', {
    schema: {
      toPosition: {default: '2 2.95 -9'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        if(headMoved === true){
            this.setAttribute('position', data.toPosition);
        }
      });
    }
});

AFRAME.registerComponent('move-scarf', {
    schema: {
      toPosition: {default: '2 1.5 -9'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        if(headMoved === true){
            this.setAttribute('position', data.toPosition);
        }
      });
    }
});
