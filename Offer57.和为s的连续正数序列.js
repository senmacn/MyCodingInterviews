// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列
// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const max_length = Math.floor(Math.sqrt(target * 2) + 1);
  const res = [];
  for (let len = max_length; len >= 2; len--) {
    if ((target * 2) % len === 0) {
      let tmp = (target * 2) / len - len + 1;
      if (tmp > 0 && tmp % 2 === 0) {
        let a = tmp / 2;
        let cur = [];
        for (let i = 0; i < len; i++) {
          cur.push(i + a);
        }
        res.push(cur);
      }
    }
  }
  return res;
};
