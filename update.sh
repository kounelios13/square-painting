#!/bin/bash
echo "Author:Manos Kounelakis"
echo "give me a commit message:"
read "msg"
git add "*.*"
git commit -m"$msg"
git push
#Finish the program but do not exit the termiall till the user presses a key
echo "Press a key to exit"
read