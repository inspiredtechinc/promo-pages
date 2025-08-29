
# Promo Pages

[![Deploy project-* branches](https://github.com/inspiredtechinc/promo-pages/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/inspiredtechinc/promo-pages/actions/workflows/pages/pages-build-deployment)

## 🚀 Project Previews

Preview any deployed project-* branch at:

### Preview deployed project branches

| Project   | Link                                                                 | Status |
|-----------|----------------------------------------------------------------------|--------|
| project-c | [Open ↗](https://inspiredtechinc.github.io/promo-pages/project-c/)   | ![Deploy](https://github.com/inspiredtechinc/promo-pages/actions/workflows/deploy.yml/badge.svg?branch=project-c) |
| project-k | [Open ↗](https://inspiredtechinc.github.io/promo-pages/project-k/)   | ![Deploy](https://github.com/inspiredtechinc/promo-pages/actions/workflows/deploy.yml/badge.svg?branch=project-k) |
| project-x | [Open ↗](https://inspiredtechinc.github.io/promo-pages/project-x/)   | ![Deploy](https://github.com/inspiredtechinc/promo-pages/actions/workflows/deploy.yml/badge.svg?branch=project-x) |


## 🛠 How to Deploy a New Project

1. Create a new branch named `project-<your-id>` (e.g., `project-y`).
2. Add your static HTML files to the branch.
3. Push the branch to GitHub:
	```sh
	git checkout -b project-y
	# Add your files
	git add .
	git commit -m "Add project-y landing page"
	git push origin project-y
	```
4. GitHub Actions will automatically deploy your branch to:
	`https://inspiredtechinc.github.io/promo-pages/project-y/`

## 💡 Tips

- Only branches named `project-*` are deployed and previewable.
- You can add as many project-* branches as you need.
- No custom domain or build step required—just static files!

---
Maintained by InspiredTech Inc. | For questions, open an issue or pull request.
