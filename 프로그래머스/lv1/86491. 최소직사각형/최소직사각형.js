function solution(sizes) {
  let w = 0;
  let h = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      if (w < sizes[i][0]){
          w = sizes[i][0];
      }
      if (h < sizes[i][1]){
           h = sizes[i][1];
      }
    } else {
      if (w < sizes[i][1]){
           w = sizes[i][1];
      }
      if (h < sizes[i][0]){
          h = sizes[i][0];
      }
    }
  }

  return w * h;
}
