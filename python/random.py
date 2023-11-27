#AN EXAMPLE OF A LIST IN PYTHON
stack = ['apple','banana','pear','orange','pineapple','pear','grape','cumcumber']
#for i in range(0):
print(stack)

#?REVERSES THE LIST IN OPPISITE DIRECTION
print('#REVERSES THE LIST IN OPPISITE DIRECTION AND RETURNS NONE')
print(stack.reverse())
print(stack)

#!CHECKS THE LENGTH OF THE LIST
print('#CHECKS THE LENGTH OF THE LIST')
print(len(stack))

#?REMOVES ELEMENTS FROM THE LIST
print('#REMOVES ELEMENTS FROM THE LIST')
print(stack.pop())

#ADDS ELEMETS TO THE LIST
print('#ADDS ELEMETS TO THE LIST')
print(stack.append('green'))

print(stack)
print(len(stack))

#!FINDS THE INDEX OF AN ELEMENT IN A LIST
print('#FINDS THE INDEX OF AN ELEMENT IN A LIST')
print(stack.index('pear',))

#SORTS THE LIST IN AN ORDERD MANNER
print('#SORTS THE LIST IN AN ORDERD MANNER AND RETURNS NONE')
print(stack.sort())

#?FINDS THE NEXT SAME ELEMENTS STARTING FROM A PARTICULAR POINT
print('#FINDS THE NEXT SAME ELEMENTS STARTING FROM A PARTICULAR POINT')
print(stack.index('pear',3))
print(stack)


#!HELPS COUNT THE NUMBER OF TIMES A PATICULAR ELEMENT APPEAR
print('#HELPS COUNT THE NUMBER OF TIMES A PATICULAR ELEMENT APPEAR')
print(stack.count('pear'))

#*RETURNS 0 IF THE INPUTED ELEMET IS NOT FOUND
print('#RETURNS 0 IF THE INPUTED ELEMET IS NOT FOUND')
print(stack.count('corn'))

#? REMOVES THE UNWANTED ELEMENT IN A LIST
print(stack.remove('banana'))
print(stack)

#! REMOVES ALL ITEMS IN THE LIST
print('#REMOVES ALL ITEMS IN THE LIST')
print(stack.clear())
print(stack)