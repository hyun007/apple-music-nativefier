nativefier --name "Apple Music" "https://music.apple.com/" \
  --tray --widevine --enable-es3-apis -e 15.3.5 --internal-urls ".*?" \
  --background-color "#333333" -u firefox \
  --global-shortcuts shortcuts.json \
  --inject player-shim.js \
  --single-instance \
  ./build/
