  #!bin/bash
  now=`date '+%Y-%m-%d %H:%M:%S'`
  echo "Hello next_app !"
  cd /workspace/next_app
  npm run start
  echo "Update react_app success!"$now

