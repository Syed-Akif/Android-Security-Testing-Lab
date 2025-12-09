# Manifest Findings (example notes)

- Look for android:debuggable="true" — indicates build for debugging.
- Check exported activities/services/providers with no permission guard.
- Search for hardcoded content in res/values/strings.xml that may contain API keys or credentials.
- Note: Use `apktool d <apk>` to extract AndroidManifest.xml for review.
