export function doIt(x = 'do it...')
{
    let t = document.getElementById('a1');
    if (t != null)
      t.innerHTML = x;
}
export function initGL() {
    const canvas = document.gelElementById('myCan');
    const gl = canvas.getContext("webgl2");
    gl.clearColor(0.30, 0.47, 0.8, 1);
  }
  