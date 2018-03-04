STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working directory clean"* ]]
then
    sed -i "" '/styleguide/d' ./.gitignore
    git add .
    git commit -m "Edit .gitignore to publish"
    git push origin `git subtree split --prefix styleguides/styleguide origin `:gh-pages --force
    git reset HEAD~
    git checkout .gitignore
else
    echo "Need clean working directory to publish"
fi
