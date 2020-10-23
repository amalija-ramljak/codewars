def sum_two_smallest_numbers(numbers):
    smallest = min(numbers)
    index = numbers.index(smallest)
    numbers.pop(index)
    smallest2 = min(numbers)
    return smallest + smallest2