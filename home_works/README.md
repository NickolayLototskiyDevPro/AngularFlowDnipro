# AngularFlowDnipro

## Homework 1 ##
- Create override method that can retrieve day, month(as number as text format) and year and return Date object
- Override this method for retrieve array of such parameters and retrieve array with dates.
- Implements to string method. Retrieve different type of object returns string
- Implements valueOf method. Retrieve different type of objects returns true/false.
- Implement Mixin for Disposable, Deletable, Readable {isReadOnly}. Class should contains property value: string. If Dispose it should be equals ''. If delete is should be equals 'deleted'. Id read only it can't be changed.
- Implement generic for two way linked list for different items type.
- Create three asynchronous(invoke two async timeout in parallel when the first finish run third and when all finish console log 'Done!') timeout request to parallel. And When it all done log to console 'DONE!'

## Homework 2 ##
- Create root component container.
- As its first child element create clock container (has clock but not show it).
- As clock container timer child create show-time component (It shows time and has button - remember time).
- As root container child create element time-capsule. It can remember time from show-time container.
- This container contains element that has button thats trigger 
  event that forced show time container show remembered time for 5 seconds. 
  After this it has to show time as usually.