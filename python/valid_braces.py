def validBraces(string):
  pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  stack = []
  for p in string:
      if p in {'[', '(', '{'} or len(stack) == 0:
          stack.append(p)
      elif len(stack) > 0 and stack[-1] in {']', ')', '}'}:
          stack.append(p)
      elif p == pairs[stack[-1]]:
          stack.pop()
          
  return len(stack) == 0