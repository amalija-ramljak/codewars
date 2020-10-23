#include <inttypes.h>

unsigned long long int rowSumOddNumbers(unsigned long long int n)
{
    // n is the amount of them in the row
    // in the nth row, they start from the n*(n-1)/2 + 1 th odd number
    
    unsigned long long int order = n*(n-1)/2 + 1;
    unsigned long long int first = 2*order - 1;
    unsigned long long int sum = 0;
    for(long long int i = 0; i < n; i++){
      sum += first + 2*i;
    }
    return sum;
}