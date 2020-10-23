int find_even_index(const int *values, int length) {
  for(int i = 0; i < length; i++){  // 0 has no indexes to the left
    int sum_left = 0;
    int sum_right = 0;
    for(int j = 0; j < i; j++){
      sum_left += values[j];
    }
    for(int j = i+1; j < length; j++){
      sum_right += values[j];
    }
    if(sum_left == sum_right)
      return i;
  }
  return -1;
}