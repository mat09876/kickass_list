var parent = document.querySelector('.wrap');
var list = [];
var btn = document.querySelector('.app__btn--sort--by-value');

var data = [
 ];




var toggle = ['ASC', 'DESC'];
var count = 0;

btn.onclick = function() {
  console.log('###');
   doSort();
  
};



var Item = function(conf) {
    this.ele = document.createElement('div');
    this.ele.className = 'app__list__list-item';
    this._data = conf.data;

    this.ele.innerHTML = this._data.value;
    this.sortType = '';
   
    this.setData = function(data){
      this._data= data;
      this.updateData(data);
    };
  
    this.getData = function() {
      return this._data;
    };
  
    this.updateData= function(newData) {
      newData = newData || this.getData();
      this.ele.innerHTML = newData.value;
    };

};

function initData(){
  for(var i = 0 ; i < 100 ; i++) {
    data.push({
      value: randomGen(1,1000),
      age: randomGen(10, 40),
      name: 'afasd'
    });
  }
}

function randomGen(min, max) {
  return min + Math.floor(Math.random() * max);
}


function initList() {
  var i = 0, ln = data.length;
  var item;
  var frag = document.createDocumentFragment();
  for(; i < ln; i++) {
    item = new Item({
      data: data[i]
    });
    frag.appendChild(item.ele);
    list.push(item);
  }
  parent.appendChild(frag);
}

function doSort() {
  console.time('sort');
  data = data.sort(function(i1, i2) {
    return i1.value > i2.value;
  });
  updateList();
  console.timeEnd('sort');
}

function updateList() {
  for(var i=0; i < data.length; i++) {
    list[i].setData(data[i]);
  }
}

initData();
initList();
