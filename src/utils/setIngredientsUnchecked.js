export function setIngredientsUnchecked(arr, input, num) {
    if (arr.length > num) {
      arr[0].checked = false;
      arr.splice(0, 1);
    }
  }