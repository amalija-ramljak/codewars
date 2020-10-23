#include <string>
#include <vector>

std::string who_is_next(const std::vector<std::string>& names, long long r) {
  int step = names.size();
  int start = 1;
  int next_start = start + step;
  // find interval where r is (starts with names[0] end with names[-1])
  // 6 7 8 9 10 11 12 13 14 15
  while(r >= next_start) {
    step *= 2;
    start = next_start;
    next_start += step;
  }
  // snap to interval from 0
  // 0 1 2 3 4 5 6 7 8 9
  r -= start;
  // divide the number by how many times names fits into found interval
  // 0 0 1 1 2 2 3 3 4 4
  int interval_length = next_start - start + 1;
  r /= (interval_length / names.size());
  
  return names[r];
}