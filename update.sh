#!/bin/bash
git add "*.*"
echo "give me a commit message:"
read "msg"
git commit -m"$msg"