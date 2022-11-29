Code to reproduce issue https://youtrack.jetbrains.com/issue/IDEA-307036/

### How to reproduce
1. clone project
2. run in IDEA product
3. try to change something
4. open terminal and run `cat lorem.txt` to have something in the terminal
5. add to pre-commit inside package.json "failrun" and try to commit
6. notification  with error pop-ups
7. try to scroll in the terminal window

### Observation

Terminal window is slow both for scroll and typing. Output in console is quite slow as well.

### Notes

If console popup is dismissed everything backs to normal.
