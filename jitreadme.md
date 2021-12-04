##

\*Builds a CSS file with all the CSS properties

npx tailwindcss -o ./build/style.css

##

*Builds a JIT CSS file with purge and watch enabled
*Omit purge and JIT if already entered into the config file

npx tailwindcss -i src/style.css -o build/style.css --JIT --purge="./\*html" --watch

npx tailwindcss -i src/style.css -o build/style.css --watch

##

\*Builds a config file

npx tailwindcss init
