
    function deepClone(source) {
      //通过判断传入对象是否为数组，为数组则初始化一个空数组，否则初始化为空对象
      const target = source.constructor === Array ? [] : {}
      //遍历每一个对象属性
      for (let property in source) {
        //当为数组property为索引值.为对象property为属性

        if (source.hasOwnProperty(property)) {        // eslint-disable-line
          if (source[property] && typeof source[property] === 'object') {
            //是对象或数组则递归
            target[property] = deepClone(source[property])
          } else {
            //否则直接赋值
            target[property] = source[property]
          }
        }
      }
      return target
    }

    export default  {
      deepClone
    }