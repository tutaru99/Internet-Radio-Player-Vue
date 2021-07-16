set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tutaru99/Internet-Radio-Player-Vue.git main:gh-pages

cd -