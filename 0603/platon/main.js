import {vec3} from "./vec3.js";
import {mat4} from "./mat4.js";

/*
function addMethod(obj, name, func) {
  var old = obj[name];
  obj[name] = (...args) => {
    if (func.length == args.length)
      return func.apply(obj, args);
    else if (typeof old == 'function')
      return old.apply(obj, args);
  }
}
*/
export function myOnLoad() {
  let aa = mat4();
  aa.setTranslate(vec3(0, 1, 2));
  aa.transpose();
  aa.inverse();
  aa.frustum(-1, 1, -1, 1, 1, 100);
  aa.setTranslate(3, 4, 5);
  aa.translate(13, 14, 15);
  let m1;
  m1 = mat4();
  m1.setScale(vec3(1, 2, 3));
  m1.scale(vec3(1, 2, 3)).scale(vec3(5, 6, 7));
  let b1 = m1.toArray();
  console.log(b1.length);
  m1 = mat4().setTranslate(29, 8, 30);

  let trans = mat4().setTranslate(29, 8, 30).transformPoint(vec3(0, 0, 0));


  let m;
  m = mat4();
  m.setScale(vec3(1, 2, 3));

  let a = [1, 2, 3];
  a.f = () => 0;
  let b = new Float32Array(a);
  console.log(b.length);

  let t = [1, 2].concat([3, 4], 5);

  let q = new vec3(1, 2, 3).dot(new vec3(4, 5, 6));
  let v1 = new vec3(1, 2, 3);
  let v2 = new vec3(4, 5, 6);
  let v3 = new vec3([7, 8, 9]);
  let v4 = v3;
  v4.x = 100;
  let v5 = new vec3();
  v5.x = 100;
  let vb1 = new Float32Array(v1);
  let vertexes = [v1.toArray(), v2.toArray(), v2.toArray(), v1.toArray()];
  let vb2 = new Float32Array([].concat(...vertexes));

  let vecsToFloat = (array) => {
    let vs = [];
    array.forEach((el) => vs.push(el.toArray()));
    return new Float32Array([].concat(...vs));
  };

  let verts1 = [v1, v2, v3, v1];
  let vrs = [];
  verts1.forEach((b) => vrs.push(b.toArray()));
  let vb3 = new Float32Array([].concat(...vrs));

  let vrs1 = [];
  vrs1.length = 3;
  vrs1[1] = vec3(7, 7, 7);
  vrs1[4] = vec3(17, 17, 17);


  let r = v1.dot(v2);
}
/*
let fs = require("fs");
let stdinBuffer = fs.readFileSync(0); // STDIN_FILENO = 0
const lines = stdinBuffer.split("\n");
const casesCount = parseInt(lines[0]);
*/