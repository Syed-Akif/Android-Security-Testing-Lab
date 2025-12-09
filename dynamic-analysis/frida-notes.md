# Frida Notes (example)

- Example bypass_login.js script is under tools/frida_scripts/
- Use `frida-ps -U` to list running processes on emulator.
- Attach with: frida -U -l bypass_login.js -f com.example.app
- Capture outputs and save to dynamic-analysis/frida-output.txt
