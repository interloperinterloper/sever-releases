# vocalsplit releases

Downloads and changelog for vocalsplit, the local vocal splitter (vocals + music, BPM, key) that runs on your own GPU.

Site: https://vocalsplit.interloper.tools (reads the latest release from this repo's GitHub Releases).

- Windows 10/11 64-bit, NVIDIA GPU recommended (RTX 50-series works), about 4 GB disk
- The installer is small; it downloads CUDA PyTorch (about 3 GB) and the model (about 900 MB) on first setup

## Publishing a release
Build in the vocalsplit repo (`installer\build.ps1 -Version X.Y.Z`), then:
```
gh release create vX.Y.Z dist\vocalsplit-setup-X.Y.Z.exe --repo interloperinterloper/vocalsplit-releases --title "vocalsplit X.Y.Z" --notes "- what changed"
```
The site shows the newest release and the changelog from the release notes. Nothing to redeploy.
