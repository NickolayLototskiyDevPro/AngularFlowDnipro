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


## Homework 3 ##
- Implements pipe for translate alphabetical symbols to morse alphabet.
- Implements pipe for filtering numbers. If you path true(default) pass even numbers from array only. If you path false odd.
- Colored table directive (1st - th(odd color), 2nd - th(even color), 3rd - tr(odd color), 4th - tr(even color))
- Implement switch off/on button directive for checkbox container

## Homework 4 ##
- Create service for time count.
- Create service for time capsule.
- Inject service with DI.
- Use modules architecture.

## Homework 5 ##
- Given two buttons - Increment and decrement.(3 different component two buttons and one counter title)
- Given counter - After starting application it disabled. After two seconds after app start it enabled to increase/decrease
- Counter decrease/increase appear to counter after 1 second delay.
- Use redux components architecture.
- Enjoy!