function spiral(arr){
  let arrPenampung = []
  let col = arr.length
  let row = arr[0].length
  let topIndex = 0
  let rightIndex = row-1
  let leftIndex = 0
  let bottomIndex = row-1

//----- top cutting---///


  let side = 'top'
  // // for (var i = topIndex; i <= bottomIndex; i++) {
  // //   arrPenampung.push(arr[topIndex][i])
  // // }
  // // side = 'right'
  //
  // topIndex++

//-- right cutting ---//
// // for (var i = topIndex; i < arr.length; i++) {
// //   console.log(arr[i][rightIndex])
// // } side = 'bottom'
//   rightIndex--

//--- bottom cutting ----//
  // // for (var i = rightIndex; i >= 0; i--) {
  // //   console.log(arr[bottomIndex][i])
  // // }
  // // side : 'left'
  // bottomIndex--
  console.log('==============')
  //-- left cutting--//
  arr.map(data=>{
    console.log(data)
  })
  console.log('=========')
  // // for (var i = bottomIndex; i >= topIndex; i--) {
  // //   console.log(arr[i][leftIndex])
  // // }
  // // side : 'top'
  // leftIndex++

  // for (var i = topIndex; i <= bottomIndex; i++) {
  //   console.log(arr[topIndex][i])
  // }
  // console.log(arrPenampung)
  debugger
    while(topIndex <= bottomIndex && leftIndex <= rightIndex){
      if(side == 'top'){
        for (var i = topIndex; i <= bottomIndex; i++) {
          arrPenampung.push(arr[topIndex][i])
        }
        side = 'right'
        topIndex++
        continue
      }else if(side == 'right'){
         for (var i = topIndex; i <= rightIndex; i++) {
          arrPenampung.push(arr[i][rightIndex])
        }
          side = 'bottom'
        rightIndex--
          continue
      }else if(side == 'bottom'){
        for (var i = rightIndex; i >= leftIndex; i--) {
          arrPenampung.push(arr[bottomIndex][i])
        }
        side = 'left'
        bottomIndex--
        continue
      }else if(side == 'left'){
        for (var i = bottomIndex; i >= topIndex; i--) {
          arrPenampung.push(arr[i][leftIndex])
        }
        side = 'top'
        leftIndex++
        continue
      }
    }
    return arrPenampung
  }
  //
  // while(topIndex <= bottomIndex && leftIndex <= rightIndex){
  //   if(side == 'top'){
  //     for (var i = topIndex; i <= bottomIndex; i++) {
  //       arrPenampung.push(arr[topIndex][i])
  //     }
  //     side = 'right'
  //     topIndex++
  //     continue
  //   }else if(side == right){
  //      for (var i = topIndex; i < arr.length; i++) {
  //       arrPenampung.push(arr[i][rightIndex])
  //     }
  //       side = 'bottom'
  //     arrPenampung.push--
  //       continue
  //   }else if(side == 'botoom'){
  //     for (var i = rightIndex; i >= 0; i--) {
  //       arrPenampung.push(arr[bottomIndex][i])
  //     }
  //     side : 'left'
  //     bottomIndex--
  //     continue
  //   }else if(side == 'left'){
  //     for (var i = bottomIndex; i >= topIndex; i--) {
  //       arrPenampung.push(arr[i][leftIndex])
  //     }
  //     side : 'top'
  //     leftIndex++
  //     continue
  //   }
  // }

function inputGenerator(input){
  let arr = []
  let count = 1
  for (var i = 0; i < input; i++) {
    arr.push([])
    for (var j = 0; j < input; j++) {
      arr[i].push(count)
      count++
    }
  }
  return arr
}

let input = inputGenerator(4)
// console.log(input)
console.log(spiral(input))

/*
pseudocode spiral :
itung data paling atas end loop rubah posisi
*/
