
PHONEY: extension

extension: pdfjs-extension.xpi

pdfjs-extension.xpi:
	cd extension && zip -r ../pdfjs-extension.xpi .

# nvm use 20
# rm -rf node_modules
# npm install
# npx gulp generic
# npx gulp dist
# npx gulp clean




# 🚀 Why People Still Use gh-pages

# Because it allows:

# Clean CI/CD pipelines

# Auto-build via GitHub Actions

# No need to pollute main branch with build files

# One branch = one static site

# 🧩 In Your Case

# You are currently using:

# Branch: main or publish
# Folder: /docs

# That is perfectly fine.

# You do NOT need gh-pages branch unless you want:

# Cleaner source repo

# Automatic deployment

# Professional CI setup

# 💡 When Should You Use gh-pages?

# Use gh-pages branch if:

# You keep PDF.js source in repo

# You build using gulp

# You want only build/generic deployed

# You don’t want build artifacts in main branch

# 🔥 Example Professional Setup
# main → source code only
# GitHub Action:
#    on push main
#    run gulp dist
#    copy build/generic → gh-pages
#    push gh-pages
# GitHub Pages serves gh-pages

# Fully automated.
