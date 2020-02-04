export function  sleep(time){
  return new Promise(resolve => setTimeout(resolve, time));
};

export function randomColor() {
  var numbers = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += numbers[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default sleep;
